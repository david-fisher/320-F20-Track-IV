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
});
describe("Test DB access point", () => {
  it("Status of open simulations is 2", (done) => {
    const instructorTokenForTest = null;
    const openSimulations = db.getOpenSimulations(instructorTokenForTest);

    for (let simulation of openSimulations) {
      assert.strictEqual(simulation.status, 2);
    }
    done();
  });

  it("Status of draft simulations is 1", (done) => {
    const instructorTokenForTest = null;
    const openSimulations = db.getDraftedSimulations(instructorTokenForTest);

    for (let simulation of openSimulations) {
      assert.strictEqual(simulation.status, 1);
    }
    done();
  });

  it("Status of closed simulations is 0", (done) => {
    const instructorTokenForTest = null;
    const openSimulations = db.getClosedSimulations(instructorTokenForTest);

    for (let simulation of openSimulations) {
      assert.strictEqual(simulation.status, 0);
    }
    done();
  });
});
