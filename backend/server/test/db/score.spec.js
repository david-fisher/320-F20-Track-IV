/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("score DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getScore", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid score with valid stakeholderID, issueID", function (done) {});
    it("Should return null with invalid stakeholderID", function (done) {});
    it("Should return null with invalid issueID", function (done) {});
  });

  describe("test createScore", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid score with valid stakeholderID, issueID, value", function (done) {});
    it("Should throw error with invalid stakeholderID", function (done) {});
    it("Should throw error with invalid issueID", function (done) {});
    it("Should throw error with invalid value", function (done) {});
    it("Should throw error with existing score of stakeholderID and issueID", function (done) {});
  });

  describe("test updateInstuction", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid score with valid stakeholderID, issueID, value", function (done) {});
    it("Should return null with invalid stakeholderID", function (done) {});
    it("Should return null with invalid issueID", function (done) {});
    it("Should throw error with invalid value", function (done) {});
  });

  describe("test deleteScore", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid score with valid stakeholderID, issueID", function (done) {});
    it("Should return null with invalid stakeholderID", function (done) {});
    it("Should return null with invalid issueID", function (done) {});
  });
});
