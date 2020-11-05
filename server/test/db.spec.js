const db = require("../db");
const assert = require("assert");

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
