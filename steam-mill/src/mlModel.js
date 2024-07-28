// src/mlModel.js

const tf = require('@tensorflow/tfjs');

class FailurePredictionModel {
  constructor() {
    this.model = null;
  }

  async trainModel(trainingData) {
    const xs = tf.tensor2d(trainingData.map(d => [d.metric1, d.metric2]));
    const ys = tf.tensor2d(trainingData.map(d => d.label));

    this.model = tf.sequential();
    this.model.add(tf.layers.dense({ units: 10, activation: 'relu', inputShape: [2] }));
    this.model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

    this.model.compile({ optimizer: 'sgd', loss: 'binaryCrossentropy', metrics: ['accuracy'] });

    await this.model.fit(xs, ys, {
      epochs: 50,
      callbacks: tf.callbacks.earlyStopping({ monitor: 'loss', patience: 5 })
    });
  }

  predict(input) {
    const prediction = this.model.predict(tf.tensor2d([input]));
    return prediction.dataSync()[0];
  }
}

module.exports = FailurePredictionModel;
