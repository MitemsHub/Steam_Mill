// src/dashboard.js

const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Mock data for the dashboard
const mockData = {
  metrics: [
    { name: 'Engine Speed', value: 1200 },
    { name: 'Temperature', value: 75 },
    { name: 'Pressure', value: 30 },
  ]
};

// Route for the dashboard
app.get('/', (req, res) => {
  res.render('dashboard', { data: mockData });
});

app.listen(3001, () => {
  console.log('Dashboard server listening on port 3001');
});

module.exports = app;
