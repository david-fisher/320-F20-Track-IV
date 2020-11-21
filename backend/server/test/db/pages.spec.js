/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("pages DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getPage", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid page with valid pageID", function (done) {});
    it("Should return null with invalid pageID", function (done) {});
  });

  describe("test getPagesBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid pages with valid order", function (done) {});
    it("Should return valid pages with valid type", function (done) {});
    it("Should return valid pages with valid scenarioID", function (done) {});
    it("Should return valid pages with valid order, type, scenarioID", function (done) {});
    it("Should return no pages with invalid order", function (done) {});
    it("Should return no pages with invalid type", function (done) {});
    it("Should return no pages with invalid scenarioID", function (done) {});
  });

  describe("test createPage", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid page with valid order, type, bodyText, scenarioID", function (done) {});
    it("Should throw error with invalid order", function (done) {});
    it("Should throw error with invalid type", function (done) {});
    it("Should throw error with invalid bodyText", function (done) {});
    it("Should throw error with invalid scenarioID", function (done) {});
    it("Should throw error when a page exists with order, type, scenarioID", function (done) {});
  });

  describe("test updatePage", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid page with valid pageID, bodyText", function (done) {});
    it("Should return null with invalid pageID", function (done) {});
    it("Should throw error with invalid bodyText", function (done) {});
  });

  describe("test deletePage", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid page with valid pageID", function (done) {});
    it("Should return null with invalid pageID", function (done) {});
  });
});
