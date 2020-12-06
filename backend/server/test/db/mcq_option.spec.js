/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("mcq_option DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getMcqOption", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid mcq option with valid mcqOptionID", function (done) {});
    it("Should return null with invalid mcqOptionID", function (done) {});
  });

  describe("test getMcqOptionsBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid mcq options with valid questionID", function (done) {});
    it("Should return no mcq options with invalid questionID", function (done) {});
  });

  describe("test createMcqOption", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid mcq option with valid questionID, option", function (done) {});
    it("Should throw error with invalid questionID", function (done) {});
    it("Should throw error with invalid option", function (done) {});
  });

  describe("test updateMcqOption", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid mcq option with valid mcqOptionID, option", function (done) {});
    it("Should return null with invalid mcqOptionID", function (done) {});
    it("Should throw error with invalid option", function (done) {});
  });

  describe("test deleteMcqOption", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid mcq option with valid mcqOptionID", function (done) {});
    it("Should return null with invalid mcqOptionID", function (done) {});
  });
});
