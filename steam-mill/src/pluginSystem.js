// src/pluginSystem.js

class PluginSystem {
    constructor() {
      this.plugins = [];
    }
  
    registerPlugin(plugin) {
      this.plugins.push(plugin);
    }
  
    executePlugins(data) {
      this.plugins.forEach(plugin => {
        data = plugin(data);
      });
      return data;
    }
  }
  
  module.exports = PluginSystem;

  