// tests/performance.test.js

const PerformanceMonitor = require('../src/performance');

test('logMetric should log a metric', () => {
  const monitor = new PerformanceMonitor();
  monitor.logMetric('engine1', { temperature: 100, pressure: 200 });
  const metrics = monitor.getMetrics('engine1');
  expect(metrics.length).toBe(1);
  expect(metrics[0].metric).toEqual({ temperature: 100, pressure: 200 });
});
