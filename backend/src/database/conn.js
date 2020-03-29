const knex = require('knex');
const conf = require('../../knexfile');

const knex_conf = process.env.NODE_ENV === 'test' ? conf.test : conf.development;

const conn = knex(knex_conf);

module.exports = conn;