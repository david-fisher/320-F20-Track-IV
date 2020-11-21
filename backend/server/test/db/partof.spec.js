/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("partof DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getConnectionOfScenarioAndCourse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid connection with valid scenarioID, courseID", function (done) {});
    it("Should return null with invalid scenarioID", function (done) {});
    it("Should return null with invalid courseID", function (done) {});
  });

  describe("test getConnectionsOfScenarioAndCourse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid connections with valid scenarioID", function (done) {});
    it("Should return valid connections with valid courseID", function (done) {});
    it("Should return no connections with invalid scenarioID", function (done) {});
    it("Should return no connections with invalid courseID", function (done) {});
  });

  describe("test createConnectionOfScenarioAndCourse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid connection with valid scenarioID, courseID", function (done) {});
    it("Should throw error with invalid scenarioID", function (done) {});
    it("Should throw error with invalid courseID", function (done) {});
    it("Should throw error when scenario is already connected to course", function (done) {});
  });

  describe("test deleteConnectionOfScenarioAndCourse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid connection with valid scenarioID, courseID", function (done) {});
    it("Should return null with invalid scenarioID", function (done) {});
    it("Should return null with invalid courseID", function (done) {});
  });

  describe("test deleteConnectionsOfScenarioAndCourse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete valid connections with valid courseID", function (done) {});
    it("Should delete valid connections with valid scenarioID", function (done) {});
    it("Should return no connections with invalid scenarioID", function (done) {});
    it("Should return no connections with invalid courseID", function (done) {});
  });
});
