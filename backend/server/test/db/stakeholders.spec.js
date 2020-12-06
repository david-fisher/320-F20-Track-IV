/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("stakeholders DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getStakeholder", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid stakeholder with valid stakeholderID", function (done) {});
    it("Should return null with invalid stakeholderID", function (done) {});
  });

  describe("test getStakeholdersBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid stakeholders with valid scenarioID", function (done) {});
    it("Should return valid stakeholders with valid convTaskID", function (done) {});
    it("Should return valid stakeholders with valid name", function (done) {});
    it("Should return valid stakeholders with valid scenarioID, convTaskID", function (done) {});
    it("Should return no stakeholders with invalid scenarioID", function (done) {});
    it("Should return no stakeholders with invalid convTaskID", function (done) {});
    it("Should return no stakeholders with invalid name", function (done) {});
  });

  describe("test createStakeholder", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid stakeholder with valid scenarioID, convTaskID, name, description, conversation", function (done) {});
    it("Should throw error with invalid scenarioID", function (done) {});
    it("Should throw error with invalid convTaskID", function (done) {});
    it("Should throw error with invalid name", function (done) {});
    it("Should throw error with invalid description", function (done) {});
    it("Should throw error with invalid conversation", function (done) {});
  });

  describe("test updateStakeholder", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid stakeholder with valid stakeholderID, name, description, conversation", function (done) {});
    it("Should return null with invalid stakeholderID", function (done) {});
    it("Should throw error with invalid name", function (done) {});
    it("Should throw error with invalid description", function (done) {});
    it("Should throw error with invalid conversation", function (done) {});
  });

  describe("test deleteStakeholder", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid stakeholder with valid stakeholderID", function (done) {});
    it("Should return null with invalid stakeholderID", function (done) {});
  });
});
