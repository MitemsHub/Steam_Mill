// src/alerting.js

const EventEmitter = require('events');

class AlertingSystem extends EventEmitter {
  constructor() {
    super();
    this.thresholds = {};
  }

  setThreshold(engineId, metric, threshold) {
    if (!this.thresholds[engineId]) {
      this.thresholds[engineId] = {};
    }
    this.thresholds[engineId][metric] = threshold;
  }

  checkMetric(engineId, metric, value) {
    if (this.thresholds[engineId] && value > this.thresholds[engineId][metric]) {
      this.emit('alert', `Engine ${engineId}: ${metric} exceeded threshold with value ${value}`);
    }
  }
}

module.exports = AlertingSystem;
