/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("scenario DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getScenario", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid scenario with valid scenarioID", function (done) {});
    it("Should return null with invalid scenarioID", function (done) {});
  });

  describe("test getScenariosBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid scenarios with valid name", function (done) {});
    it("Should return valid scenarios with valid status", function (done) {});
    it("Should return valid scenarios with valid dueDate with operator eq", function (done) {});
    it("Should return valid scenarios with valid dueDate with operator ne", function (done) {});
    it("Should return valid scenarios with valid dueDate with operator gt", function (done) {});
    it("Should return valid scenarios with valid dueDate with operator ge", function (done) {});
    it("Should return valid scenarios with valid dueDate with operator lt", function (done) {});
    it("Should return valid scenarios with valid dueDate with operator le", function (done) {});
    it("Should return valid scenarios with valid dueDates with operator gt, lt", function (done) {});
    it("Should return valid scenarios with valid name, status", function (done) {});
    it("Should return no scenarios with invalid name", function (done) {});
    it("Should return no scenarios with invalid status", function (done) {});
    it("Should throw error with invalid time in dueDate", function (done) {});
    it("Should throw error with invalid operator in dueDate", function (done) {});
  });

  describe("test createScenario", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid scenario with valid name, dueDate, description, status, additionalData", function (done) {});
    it("Should throw error with invalid name", function (done) {});
    it("Should throw error with invalid dueDate", function (done) {});
    it("Should throw error when dueDate is passed", function (done) {});
    it("Should throw error with invalid description", function (done) {});
    it("Should throw error with invalid status", function (done) {});
    it("Should throw error with invalid additionalData", function (done) {});
  });

  describe("test updateScenario", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid scenario with valid scenarioID, name, dueDate, description, status, additionalData", function (done) {});
    it("Should return null with invalid scenarioID", function (done) {});
    it("Should throw error with invalid name", function (done) {});
    it("Should throw error with invalid dueDate", function (done) {});
    it("Should throw error when dueDate is passed", function (done) {});
    it("Should throw error with invalid description", function (done) {});
    it("Should throw error with invalid status", function (done) {});
    it("Should throw error with invalid additionalData", function (done) {});
  });

  describe("test deleteScenario", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid scenario with valid scenarioID", function (done) {});
    it("Should return null with invalid scenarioID", function (done) {});
  });
});
