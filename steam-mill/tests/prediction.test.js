// src/prediction.js

class FailurePredictor {
    constructor() {
      this.history = [];
    }
  
    addData(engineId, data) {
      this.history.push({ engineId, data });
    }
  
    predictFailure(engineId) {
      const engineData = this.history.filter(h => h.engineId === engineId);
      // Simple prediction logic (to be enhanced)
      if (engineData.length > 5) {
        return 'High risk of failure';
      }
      return 'Low risk of failure';
    }
  }
  
  module.exports = FailurePredictor;
  