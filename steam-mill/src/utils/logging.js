// src/utils/logging.js
class Logger {
    static log(level, message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
    }

    static info(message) {
        this.log('info', message);
    }

    static warn(message) {
        this.log('warn', message);
    }

    static error(message) {
        this.log('error', message);
    }
}

module.exports = Logger;
