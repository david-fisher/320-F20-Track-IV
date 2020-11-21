/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("mcq_response DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getMcqResponse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid mcq response with valid responseID, questionID", function (done) {});
    it("Should return null with invalid responseID", function (done) {});
    it("Should return null with invalid questionID", function (done) {});
  });

  describe("test getMcqResponsesBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid mcq responses with valid responseID", function (done) {});
    it("Should return valid mcq responses with valid questionID", function (done) {});
    it("Should return valid mcq responses with valid mcqOptionID", function (done) {});
    it("Should return valid mcq responses with valid responseID, mcqOptionID", function (done) {});
    it("Should return valid mcq responses with valid questionID, mcqOptionID", function (done) {});
    it("Should return no mcq responses with invalid responseID", function (done) {});
    it("Should return no mcq responses with invalid questionID", function (done) {});
    it("Should return no mcq responses with invalid mcqOptionID", function (done) {});
  });

  describe("test createMcqResponse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid mcq response with valid responseID, questionID, mcqOptionID", function (done) {});
    it("Should throw error with invalid responseID", function (done) {});
    it("Should throw error with invalid questionID", function (done) {});
    it("Should throw error with invalid mcqOptionID", function (done) {});
  });

  describe("test updateMcqResponse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid mcq response with valid responseID, questionID, mcqOptionID", function (done) {});
    it("Should return null with invalid responseID", function (done) {});
    it("Should return null with invalid questionID", function (done) {});
    it("Should throw error with invalid mcqOptionID", function (done) {});
  });

  describe("test deleteMcqResponse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid mcq response with valid responseID, questionID", function (done) {});
    it("Should return null with invalid responseID", function (done) {});
    it("Should return null with invalid questionID", function (done) {});
  });
});
