/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("issues DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getIssue", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid issue with valid issueID", function (done) {});
    it("Should return null with invalid issueID", function (done) {});
  });

  describe("test createIssue", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid issue with valid name, description", function (done) {});
    it("Should throw error with invalid name", function (done) {});
    it("Should throw error with invalid description", function (done) {});
  });

  describe("test updateIssue", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid issue with valid issueID, name, description", function (done) {});
    it("Should return null with invalid issueID", function (done) {});
    it("Should throw error with invalid name", function (done) {});
    it("Should throw error with invalid description", function (done) {});
  });

  describe("test deleteIssue", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid issue with valid issueID", function (done) {});
    it("Should return null with invalid issueID", function (done) {});
  });
});
