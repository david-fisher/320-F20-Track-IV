/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("prompt DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getPrompt", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid prompt with valid pageID, promptNum", function (done) {});
    it("Should return null with invalid pageID", function (done) {});
    it("Should return null with invalid promptNum", function (done) {});
  });

  describe("test createPrompt", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid prompt with valid pageID, prompt", function (done) {});
    it("Should throw error with invalid pageID", function (done) {});
    it("Should throw error with invalid prompt", function (done) {});
  });

  describe("test updatePrompt", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid prompt with valid pageID, promptNum, prompt", function (done) {});
    it("Should return null with invalid pageID", function (done) {});
    it("Should return null with invalid promptNum", function (done) {});
    it("Should throw error with invalid prompt", function (done) {});
  });

  describe("test deletePrompt", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid prompt with valid pageID, promptNum", function (done) {});
    it("Should return null with invalid pageID", function (done) {});
    it("Should return null with invalid promptNum", function (done) {});
  });
});
