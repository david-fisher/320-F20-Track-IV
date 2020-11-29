const db = require("../db");
const assert = require("assert");
let server = require('../server');
var chai = require('chai');
var should = chai.should();


describe('API tests for simulation introduction', () => {
  describe('### GET /:simulation_id/introduction', () => {
    it('should get intro of the simulation', (done) => {
    // it('should get description of the simulation', function(done) {
        chai.request(server)
            .get('/:simulation_id/introduction')
            .end((err, res) => {
                    res.should.have.status(202)
                    res.body.should.be.a('object');
                    res.body.should.have.property('summary')
                done();
            });
    });
  });
});

describe('API tests for simulation description', () => {
    describe('### GET /:simulation_id/description', () => {
      it('should get description of the simulation', (done) => {
          chai.request(server)
              .get('/:simulation_id/description')
              .end((err, res) => {
                      res.should.have.status(202)
                      res.body.should.be.a('object');
                      res.body.should.have.property('description')
                  done();
              });
      });
    });
  });

  