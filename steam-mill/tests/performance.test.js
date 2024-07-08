// src/performance.js

class PerformanceMonitor {
    constructor() {
      this.metrics = [];
    }
  
    logMetric(engineId, metric) {
      const timestamp = new Date();
      this.metrics.push({ engineId, metric, timestamp });
      console.log(`Logged metric for engine ${engineId} at ${timestamp}:`, metric);
    }
  
    getMetrics(engineId) {
      return this.metrics.filter(m => m.engineId === engineId);
    }
  }
  
  module.exports = PerformanceMonitor;
  