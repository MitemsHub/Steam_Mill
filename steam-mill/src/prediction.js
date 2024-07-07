// src/prediction.js

class FailurePredictor {
    constructor() {
      this.history = [];
    }
  
    addData(engineId, data) {
      this.history.push({ engineId, data });
    }
  }
  
  module.exports = FailurePredictor;
  