// src/auth.js

const jwt = require('jsonwebtoken');

class AuthService {
  constructor(secret) {
    this.secret = secret;
  }

  generateToken(user) {
    return jwt.sign(user, this.secret, { expiresIn: '1h' });
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, this.secret);
    } catch (e) {
      return null;
    }
  }
}

module.exports = AuthService;
