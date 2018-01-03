// import express from 'express';

const express = require('express');
const app = express();
const knex = require('knex');
const knexConfig = require('../knexfile');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const db = knex(knexConfig);

app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/', (req, res) => res.send('Hello World SAccountAPI'));

app.get('/accounts/:id', (req, res, next) => {
  return db
    .select('name')
    .from('accounts')
    .where({ id: req.params.id })
    .first()
    .then(accountName => res.send(accountName));
});

app.listen(7000, () => console.log('SAccountAPI listening on port 7000'));
