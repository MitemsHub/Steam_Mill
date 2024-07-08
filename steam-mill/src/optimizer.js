// src/optimizer.js

class PerformanceOptimizer {
    constructor() {
      this.strategies = [];
    }
  
    addStrategy(strategy) {
      this.strategies.push(strategy);
    }
  
    optimize(metrics) {
      this.strategies.forEach(strategy => {
        metrics = strategy(metrics);
      });
      return metrics;
    }
  }
  
  module.exports = PerformanceOptimizer;
  