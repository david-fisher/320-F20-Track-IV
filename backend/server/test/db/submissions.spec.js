/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("submissions DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getSubmission", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid submission with valid submissionID", function (done) {});
    it("Should return null with invalid submissionID", function (done) {});
  });

  describe("test getSubmissionsBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid submissions with valid userID", function (done) {});
    it("Should return valid submissions with valid scenarioID", function (done) {});
    it("Should return valid submissions with valid submissionTime with operator eq", function (done) {});
    it("Should return valid submissions with valid submissionTime with operator ne", function (done) {});
    it("Should return valid submissions with valid submissionTime with operator gt", function (done) {});
    it("Should return valid submissions with valid submissionTime with operator ge", function (done) {});
    it("Should return valid submissions with valid submissionTime with operator lt", function (done) {});
    it("Should return valid submissions with valid submissionTime with operator le", function (done) {});
    it("Should return valid submissions with valid submissionTimes with operator gt, lt", function (done) {});
    it("Should return valid submissions with valid userID, scenarioID", function (done) {});
    it("Should return no submissions with invalid userID", function (done) {});
    it("Should return no submissions with invalid scenarioID", function (done) {});
    it("Should throw error with invalid time in submissionTime", function (done) {});
    it("Should throw error with invalid operator in submissionTime", function (done) {});
  });

  describe("test createSubmission", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid submission with valid userID, scenarioID", function (done) {});
    it("Should throw error with invalid userID", function (done) {});
    it("Should throw error with invalid scenarioID", function (done) {});
    it("Should throw error when user already made submission for scenario", function (done) {});
  });

  describe("test deleteSubmission", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid submission with valid submissionID", function (done) {});
    it("Should return null with invalid submissionID", function (done) {});
  });

  describe("test deleteSubmissionsByUser", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete submissions with valid userID", function (done) {});
    it("Should return no submissions with invalid userID", function (done) {});
  });

  describe("test deleteSubmissionsByUser", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete submissions with valid scenarioID", function (done) {});
    it("Should return no submissions with invalid scenarioID", function (done) {});
  });
});
