// src/index.js
const express = require('express');
const teaUtils = require('tea-utils'); // Hypothetical library
const app = express();
const port = 3000;

let steamEngines = [];

app.use(express.json());

// Add a steam engine
app.post('/engines', (req, res) => {
  const engine = req.body;

  // Validate engine data using tea-utils
  if (!teaUtils.validateEngine(engine)) {
    return res.status(400).send({ error: 'Invalid engine data' });
  }

  steamEngines.push(engine);
  console.log(`Engine added: ${JSON.stringify(engine)}`);
  res.status(201).send(engine);
});

// List all steam engines
app.get('/engines', (req, res) => {
  console.log('Listing all steam engines');
  res.send(steamEngines);
});

// Remove a steam engine
app.delete('/engines/:name', (req, res) => {
  const engineName = req.params.name;
  const initialLength = steamEngines.length;
  steamEngines = steamEngines.filter(engine => engine.name !== engineName);
  
  if (steamEngines.length < initialLength) {
    console.log(`Engine removed: ${engineName}`);
    return res.status(204).send();
  } else {
    return res.status(404).send({ error: 'Engine not found' });
  }
});

app.listen(port, () => {
  console.log(`Steam-Mill app listening at http://localhost:${port}`);
});
