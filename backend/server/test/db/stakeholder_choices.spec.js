/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("stakeholder_choices DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getStakeholderChoice", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid stakeholder choice with valid responseID, stakeholderID", function (done) {});
    it("Should return null with invalid responseID", function (done) {});
    it("Should return null with invalid stakeholderID", function (done) {});
  });

  describe("test getStakeholderChoicesBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid stakeholder choices with valid responseID", function (done) {});
    it("Should return valid stakeholder choices with valid stakeholderID", function (done) {});
    it("Should return no stakeholder choices with invalid responseID", function (done) {});
    it("Should return no stakeholder choices with invalid stakeholderID", function (done) {});
  });

  describe("test createStakeholderChoice", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid stakeholder choice with valid responseID, stakeholderID", function (done) {});
    it("Should throw error with invalid responseID", function (done) {});
    it("Should throw error with invalid stakeholderID", function (done) {});
  });

  describe("test deleteStakeholderChoice", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid stakeholder choice with valid responseID, stakeholderID", function (done) {});
    it("Should return null with invalid responseID", function (done) {});
    it("Should return null with invalid stakeholderID", function (done) {});
  });
});
