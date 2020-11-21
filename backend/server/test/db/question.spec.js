/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("question DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getQuestion", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid question with valid questionID", function (done) {});
    it("Should return null with invalid questionID", function (done) {});
  });

  describe("test getQuestions", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid questions with valid mcqID", function (done) {});
    it("Should return no questions with invalid mcqID", function (done) {});
  });

  describe("test createQuestion", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid question with valid mcqID, question", function (done) {});
    it("Should throw error with invalid mcqID", function (done) {});
    it("Should throw error with invalid question", function (done) {});
  });

  describe("test updateQuestion", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid question with valid questionID, question", function (done) {});
    it("Should return null with invalid questionID", function (done) {});
    it("Should throw error with invalid question", function (done) {});
  });

  describe("test deleteQuestion", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid question with valid questionID", function (done) {});
    it("Should return null with invalid questionID", function (done) {});
  });
});
