// Added by Velocity 13-08-2026: shared Express delivery date and cart enforcement rules.
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.ExpressDeliveryUtils = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  var DELIVERY_KEYS = [
    '_delivery_mode',
    '_express_date',
    '_standard_date',
    '_Delivery date',
    'Delivery date',
    'Pincode'
  ];

  function dayOnly(value) {
    var date = value instanceof Date ? new Date(value) : new Date(value);
    if (Number.isNaN(date.getTime())) return null;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function standardWindow(standardDate, today) {
    var promised = dayOnly(standardDate);
    var current = dayOnly(today || new Date());
    if (!promised || !current) return { start: 0, end: 1 };
    var start = Math.max(0, Math.round((promised - current) / 86400000));
    return { start: start, end: start + 1 };
  }

  function propertiesOf(item) {
    return (item && item.properties) || {};
  }

  function deliveryDateProperties(mode, date) {
    var properties = {};
    properties[mode === 'express' ? 'Delivery date' : '_Delivery date'] = date;
    return properties;
  }

  function classifyLine(item) {
    var properties = propertiesOf(item);
    if (properties._is_express_charge === '1' || properties._is_express_charge === true) {
      return 'charge';
    }
    var hasDeliveryProperty = DELIVERY_KEYS.some(function (key) {
      return Object.prototype.hasOwnProperty.call(properties, key);
    });
    if (hasDeliveryProperty) return 'main';
    if (properties['Product title']) return 'auxiliary';
    return 'main';
  }

  function validPositiveInteger(value) {
    var parsed = parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }

  function normalizeCharge(item, fallback) {
    var properties = propertiesOf(item);
    var variantId = String(properties._express_charge_variant_id || '').trim();
    var pricePaise = validPositiveInteger(properties._express_charge_price_paise);
    if (!/^\d+$/.test(variantId) || pricePaise === null) {
      return { variantId: String(fallback.variantId), pricePaise: Number(fallback.pricePaise) };
    }
    return { variantId: variantId, pricePaise: pricePaise };
  }

  function smallerVariantId(left, right) {
    var leftDigits = String(left).replace(/^0+/, '') || '0';
    var rightDigits = String(right).replace(/^0+/, '') || '0';
    if (leftDigits.length !== rightDigits.length) return leftDigits.length < rightDigits.length;
    return leftDigits < rightDigits;
  }

  function chooseHighestCharge(mainLines, fallback) {
    return (mainLines || []).map(function (line) {
      return normalizeCharge(line, fallback);
    }).reduce(function (highest, charge) {
      if (!highest || charge.pricePaise > highest.pricePaise) return charge;
      if (charge.pricePaise === highest.pricePaise && smallerVariantId(charge.variantId, highest.variantId)) {
        return charge;
      }
      return highest;
    }, null) || { variantId: String(fallback.variantId), pricePaise: Number(fallback.pricePaise) };
  }

  function cartQualifiesForExpress(mainLines) {
    return Array.isArray(mainLines) && mainLines.length > 0 && mainLines.every(function (item) {
      var properties = propertiesOf(item);
      return properties._delivery_mode === 'express' && properties._express_eligible === '1';
    });
  }

  function validDeliveryDate(value) {
    return /^\d{2}-\d{2}-\d{4}$/.test(String(value || ''));
  }

  function buildEnforcementPlan(items, fallback) {
    var cartItems = Array.isArray(items) ? items : [];
    var chargeLines = cartItems.filter(function (item) { return classifyLine(item) === 'charge'; });
    var mainLines = cartItems.filter(function (item) { return classifyLine(item) === 'main'; });
    var qualifies = cartQualifiesForExpress(mainLines);
    var plan = {
      mode: qualifies ? 'express' : 'standard',
      desiredCharge: null,
      removeChargeKeys: [],
      addCharge: null,
      setChargeQuantity: null,
      standardUpdates: []
    };

    if (qualifies) {
      plan.desiredCharge = chooseHighestCharge(mainLines, fallback);
      var desiredId = String(plan.desiredCharge.variantId);
      var matching = chargeLines.filter(function (item) {
        return String(item.variant_id) === desiredId;
      });
      var kept = matching[0] || null;
      plan.removeChargeKeys = chargeLines.filter(function (item) {
        return !kept || item.key !== kept.key;
      }).map(function (item) { return item.key; });
      if (!kept) {
        plan.addCharge = plan.desiredCharge;
      } else if (kept.quantity !== 1) {
        plan.setChargeQuantity = { key: kept.key, quantity: 1 };
      }
      return plan;
    }

    plan.removeChargeKeys = chargeLines.map(function (item) { return item.key; });
    plan.standardUpdates = mainLines.reduce(function (updates, item) {
      var current = propertiesOf(item);
      var next = Object.assign({}, current, { _delivery_mode: 'standard' });
      delete next['Delivery date'];
      if (validDeliveryDate(current._standard_date)) next['_Delivery date'] = current._standard_date;
      var needsUpdate = current._delivery_mode !== 'standard' ||
        Object.prototype.hasOwnProperty.call(current, 'Delivery date') ||
        next['_Delivery date'] !== current['_Delivery date'];
      if (needsUpdate) {
        updates.push({
          key: item.key,
          quantity: item.quantity || 1,
          properties: next
        });
      }
      return updates;
    }, []);
    return plan;
  }

  return {
    standardWindow: standardWindow,
    deliveryDateProperties: deliveryDateProperties,
    classifyLine: classifyLine,
    normalizeCharge: normalizeCharge,
    chooseHighestCharge: chooseHighestCharge,
    cartQualifiesForExpress: cartQualifiesForExpress,
    buildEnforcementPlan: buildEnforcementPlan
  };
});
