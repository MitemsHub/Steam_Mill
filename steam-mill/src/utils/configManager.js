// src/utils/configManager.js
const fs = require('fs');
const path = require('path');

class ConfigManager {
    constructor(env) {
        this.config = this.loadConfig(env);
    }

    loadConfig(env) {
        const configPath = path.join(__dirname, `../config/${env}.config.json`);
        if (!fs.existsSync(configPath)) {
            throw new Error(`Config file not found for environment: ${env}`);
        }
        return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    }

    get(key) {
        return this.config[key];
    }
}

module.exports = ConfigManager;
