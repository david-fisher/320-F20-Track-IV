/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("response DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getReponse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid response with valid responseID", function (done) {});
    it("Should return null with invalid responseID", function (done) {});
  });

  describe("test getReponsesBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid responses with valid submissionID", function (done) {});
    it("Should return valid responses with valid pageID", function (done) {});
    it("Should return valid responses with valid responseTime with operator eq", function (done) {});
    it("Should return valid responses with valid responseTime with operator ne", function (done) {});
    it("Should return valid responses with valid responseTime with operator gt", function (done) {});
    it("Should return valid responses with valid responseTime with operator ge", function (done) {});
    it("Should return valid responses with valid responseTime with operator lt", function (done) {});
    it("Should return valid responses with valid responseTime with operator le", function (done) {});
    it("Should return valid responses with valid responseTimes with operator gt, lt", function (done) {});
    it("Should return valid responses with valid submissionID, pageID", function (done) {});
    it("Should return no responses with invalid submissionID", function (done) {});
    it("Should return no responses with invalid pageID", function (done) {});
    it("Should throw error with invalid time in responseTime", function (done) {});
    it("Should throw error with invalid operator in responseTime", function (done) {});
  });

  describe("test createReponse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid response with valid submissionID, pageID", function (done) {});
    it("Should throw error with invalid submissionID", function (done) {});
    it("Should throw error with invalid pageID", function (done) {});
  });

  describe("test deleteReponse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid response with valid responseID", function (done) {});
    it("Should return null with invalid responseID", function (done) {});
  });
});
