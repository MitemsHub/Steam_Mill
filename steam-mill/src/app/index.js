const express = require('express');
const teaUtils = require('tea-utils'); // Hypothetical library
const app = express();
const port = 3000;

let steamEngines = [];

app.use(express.json());

// Add a steam engine
app.post('/engines', (req, res) => {
  const engine = req.body;

  // Validate engine data using teaUtils
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

// Update steam engine details
app.put('/engines/:name', (req, res) => {
  const engineName = req.params.name;
  const newDetails = req.body;

  // Validate new engine data using teaUtils
  if (!teaUtils.validateEngine(newDetails)) {
    return res.status(400).send({ error: 'Invalid engine data' });
  }

  let engineFound = false;
  steamEngines = steamEngines.map(engine => {
    if (engine.name === engineName) {
      engineFound = true;
      return { ...engine, ...newDetails };
    }
    return engine;
  });

  if (engineFound) {
    console.log(`Engine updated: ${engineName}`);
    res.send(newDetails);
  } else {
    res.status(404).send({ error: 'Engine not found' });
  }
});

// Get steam engine by name
app.get('/engines/:name', (req, res) => {
  const engineName = req.params.name;
  const engine = steamEngines.find(engine => engine.name === engineName);

  if (engine) {
    res.send(engine);
  } else {
    res.status(404).send({ error: 'Engine not found' });
  }
});

app.listen(port, () => {
  console.log(`Steam-Mill app listening at http://localhost:${port}`);
});
