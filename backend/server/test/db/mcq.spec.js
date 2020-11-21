/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("mcq DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getMcq", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid mcq with valid pageID", function (done) {});
    it("Should return null with invalid pageID", function (done) {});
  });

  describe("test createMcq", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid mcq with valid pageID, content", function (done) {});
    it("Should throw error with invalid pageID", function (done) {});
    it("Should throw error with invalid content", function (done) {});
  });

  describe("test updateMcq", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid mcq with valid pageID, content", function (done) {});
    it("Should return null with invalid pageID", function (done) {});
    it("Should throw error with invalid content", function (done) {});
  });

  describe("test deleteMcq", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid mcq with valid pageID", function (done) {});
    it("Should return null with invalid pageID", function (done) {});
  });
});
