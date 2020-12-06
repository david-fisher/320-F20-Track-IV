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

describe('API tests for simulation ID', () => {
  describe('### GET /:simulation_id', () => {
    it('should get simulation id', (done) => {
        chai.request(server)
            .get('/:simulation_id')
            .end((err, res) => {
                    res.should.have.status(202)
                    res.body.should.be.a('object');
                    res.body.should.have.property('simulation')
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
                    res.body.should.have.property('success').eql(true);
                done();
            });
    });
  });
});

describe('API tests for simulation ID', () => {
  describe('### GET /:simulation_id', () => {
    it('should get simulation id', (done) => {
        chai.request(server)
            .get('/:simulation_id')
            .end((err, res) => {
                    res.should.have.status(202)
                    res.body.should.be.a('object');
                    res.body.should.have.property('simulation')
                done();
            });
    });
  });
});

describe('API tests for simulation inital action', () => {
  describe('### GET /:simulation_id/initial-action', () => {
    it('initial action', (done) => {
        chai.request(server)
            .get('/:simulation_id/initial-action')
            .end((err, res) => {
                    res.should.have.status(202)
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    res.body.should.have.property('initialActionPageGroup');
                    res.body.initialActionPageGroup.should.have.property('CONV').eql(null);
                done();
            });
    });
  });
});

describe('API tests for simulation final action', () => {
  describe('### GET /:simulation_id/final-action', () => {
    it('final action', (done) => {
        chai.request(server)
            .get('/:simulation_id/final-action')
            .end((err, res) => {
                    res.should.have.status(202)
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    res.body.should.have.property('finalActionPageGroup');
                    res.body.finalActionPageGroup.should.have.property('CONV').eql(null);
                done();
            });
    });
  });
});

describe('API tests for simulation inital reflection', () => {
  describe('### GET /:simulation_id/initial-reflection', () => {
    it('initial reflection', (done) => {
        chai.request(server)
            .get('/:simulation_id/initial-reflection')
            .end((err, res) => {
                    res.should.have.status(202)
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    res.body.should.have.property('initialReflectionPageGroup');
                    res.body.initialReflectionPageGroup.should.have.property('CONV').eql(null);
                    res.body.initialReflectionPageGroup.should.have.property('MCQ').eql(null);
                done();
            });
    });
  });
});
