// src/historicalAnalysis.js

class HistoricalAnalyzer {
    constructor(data) {
      this.data = data;
    }
  
    calculateAverage(metric) {
      const values = this.data.map(entry => entry[metric]);
      const sum = values.reduce((a, b) => a + b, 0);
      return sum / values.length;
    }
  
    detectAnomalies(metric, threshold) {
      const anomalies = [];
      this.data.forEach(entry => {
        if (entry[metric] > threshold) {
          anomalies.push(entry);
        }
      });
      return anomalies;
    }
  }
  
  module.exports = HistoricalAnalyzer;
  