// src/visualization.js

const Chart = require('chart.js');

class DataVisualizer {
  constructor(context) {
    this.context = context;
    this.chart = null;
  }

  createLineChart(data, labels) {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Performance Metrics',
          data: data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  }
}

module.exports = DataVisualizer;
