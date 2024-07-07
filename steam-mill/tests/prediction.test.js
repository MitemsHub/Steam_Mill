// tests/prediction.test.js

const FailurePredictor = require('../src/prediction');

test('addData should add data', () => {
  const predictor = new FailurePredictor();
  predictor.addData('engine1', { temperature: 100, pressure: 200 });
  expect(predictor.history.length).toBe(1);
  expect(predictor.history[0].data).toEqual({ temperature: 100, pressure: 200 });
});

test('predictFailure should return correct risk level', () => {
  const predictor = new FailurePredictor();
  for (let i = 0; i < 6; i++) {
    predictor.addData('engine1', { temperature: 100, pressure: 200 });
  }
  expect(predictor.predictFailure('engine1')).toBe('High risk of failure');
});
