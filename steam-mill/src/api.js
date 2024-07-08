// src/api.js

const express = require('express');
const bodyParser = require('body-parser');
const PerformanceMonitor = require('./performance');
const app = express();
const monitor = new PerformanceMonitor();

app.use(bodyParser.json());

app.post('/logMetric', (req, res) => {
  const { engineId, metric } = req.body;
  monitor.logMetric(engineId, metric);
  res.send('Metric logged successfully');
});

app.listen(3000, () => {
  console.log('API server listening on port 3000');
});

module.exports = app;
