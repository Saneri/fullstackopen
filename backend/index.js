const express = require('express');
const { check, validationResult } = require('express-validator');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');

const PORT = 3001;

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456'
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523'
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345'
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122'
  }
];

const app = express();

app.use(express.json());
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

app.get('/info', (_, res) => {
  res.send(
    `<div>Phonebook has info for ${
      persons.length
    } people</div><div>${new Date()}</div>`
  );
});

app.get('/api/persons', (_, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);

  if (!person) return res.status(404).end();

  res.json(person);
});

app.post(
  '/api/persons',
  [
    check('name').isLength({ min: 3, max: 35 }),
    check('number').isLength({ min: 6, max: 15 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const existingPerson = persons.find(
      (person) => person.name === req.body.name
    );

    if (existingPerson) {
      return res.status(400).json({ error: 'name must be unique' });
    }

    const person = { ...req.body, id: uuidv4() };
    persons = persons.concat(person);
    res.status(200).end();
  }
);

app.delete('/api/persons/:id', (req, res) => {
  const personCount = persons.length;
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  if (persons.length >= personCount) return res.status(404).end();

  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
