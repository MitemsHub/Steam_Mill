// src/reportGenerator.js

const fs = require('fs');
const PerformanceMonitor = require('./performance');

class ReportGenerator {
  constructor(monitor) {
    this.monitor = monitor;
  }

  generateReport(engineId) {
    const metrics = this.monitor.getMetrics(engineId);
    const report = metrics.map(m => `${m.timestamp}: ${JSON.stringify(m.metric)}`).join('\n');
    fs.writeFileSync(`./reports/${engineId}-report.txt`, report);
  }
}

module.exports = ReportGenerator;
