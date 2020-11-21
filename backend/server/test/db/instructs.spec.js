/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("instructs DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getInstruction", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid instruction with valid userID, courseID", function (done) {});
    it("Should return null with invalid userID", function (done) {});
    it("Should return null with invalid courseID", function (done) {});
  });

  describe("test getInstructionsBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid instructions with valid userID", function (done) {});
    it("Should return valid instructions with valid courseID", function (done) {});
    it("Should return valid instructions with valid webpage", function (done) {});
    it("Should return valid instructions with valid userID, webpage", function (done) {});
    it("Should return valid instructions with valid courseID, webpage", function (done) {});
    it("Should return no instructions with invalid userID", function (done) {});
    it("Should return no instructions with invalid courseID", function (done) {});
    it("Should return no instructions with invalid webpage", function (done) {});
  });

  describe("test createInstruction", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid instruction with valid userID, courseID, webpage", function (done) {});
    it("Should throw error with invalid userID", function (done) {});
    it("Should throw error with invalid courseID", function (done) {});
    it("Should throw error with invalid webpage", function (done) {});
    it("Should throw error with existing instruction of userID and courseID", function (done) {});
  });

  describe("test updateInstuction", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid instruction with valid userID, courseID, webpage", function (done) {});
    it("Should return null with invalid userID", function (done) {});
    it("Should return null with invalid courseID", function (done) {});
    it("Should throw error with invalid webpage", function (done) {});
  });

  describe("test deleteInstruction", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid instruction with valid userID, courseID", function (done) {});
    it("Should return null with invalid userID", function (done) {});
    it("Should return null with invalid courseID", function (done) {});
  });

  describe("test deleteInstructionsBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete instructions with valid userID", function (done) {});
    it("Should delete instructions with valid courseID", function (done) {});
    it("Should delete instructions with valid webpage", function (done) {});
    it("Should delete instructions with valid userID, webpage", function (done) {});
    it("Should delete instructions with valid courseID, webpage", function (done) {});
    it("Should return null with invalid userID", function (done) {});
    it("Should return null with invalid courseID", function (done) {});
    it("Should return null with invalid webpage", function (done) {});
  });
});
