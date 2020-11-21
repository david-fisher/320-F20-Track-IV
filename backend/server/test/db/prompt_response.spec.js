/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("prompt_response DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getPromptResponse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid prompt response with valid responseID, promptNum", function (done) {});
    it("Should return null with invalid responseID", function (done) {});
    it("Should return null with invalid promptNum", function (done) {});
  });

  describe("test createPromptResponse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid prompt response with valid responseID, promptNum, responseValue", function (done) {});
    it("Should throw error with invalid responseID", function (done) {});
    it("Should throw error with invalid promptNum", function (done) {});
    it("Should throw error with invalid responseValue", function (done) {});
  });

  describe("test updatePromptResponse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid prompt response with valid responseID, promptNum, responseValue", function (done) {});
    it("Should return null with invalid responseID", function (done) {});
    it("Should return null with invalid promptNum", function (done) {});
    it("Should throw error with invalid responseValue", function (done) {});
  });

  describe("test deletePromptResponse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid prompt response with valid responseID, promptNum", function (done) {});
    it("Should return null with invalid responseID", function (done) {});
    it("Should return null with invalid promptNum", function (done) {});
  });
});
