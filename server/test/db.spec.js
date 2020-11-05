const db = require("../db");
const assert = require("assert");
var app = require('../server');
var chai = require('chai');
var request = require('supertest');


describe('API tests for simulation introdiction', () => {
  describe('### GET /:simulation_id/introduction', () => {
    it('should get description of the simulation', function(done) {
      request(app) .get('/:simulation_id/introduction') .end(function(err, res)) {

        // status 202 for success
        expect(res.status).to.equal(202);

        // checking return type being string
        expect(type(res.body)).to.equal('string');
        done();
      }
    });
  });

  describe('### PUT /:simulation_id/introduction', () => {

  });
});
