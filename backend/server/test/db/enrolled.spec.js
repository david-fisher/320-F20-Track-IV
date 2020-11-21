/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("enrolled DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getEnrollment", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid enrollment with valid userID, courseID", function (done) {});
    it("Should return null with invalid userID", function (done) {});
    it("Should return null with invalid courseID", function (done) {});
  });

  describe("test getEnrollmentsBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid enrollments with valid userID", function (done) {});
    it("Should return valid enrollments with valid courseID", function (done) {});
    it("Should return no enrollments with invalid userID", function (done) {});
    it("Should return no enrollments with invalid courseID", function (done) {});
  });

  describe("test createEnrollment", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid enrollment with valid userID, courseID", function (done) {});
    it("Should throw error with invalid userID", function (done) {});
    it("Should throw error with invalid courseID", function (done) {});
    it("Should throw error with existing enrollment of userID and courseID", function (done) {});
  });

  describe("test deleteEnrollment", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid enrollment with valid userID, courseID", function (done) {});
    it("Should return null with invalid userID", function (done) {});
    it("Should return null with invalid courseID", function (done) {});
  });

  describe("test deleteEnrollmentsBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete enrollments with valid userID", function (done) {});
    it("Should delete enrollments with valid courseID", function (done) {});
    it("Should return null with invalid userID", function (done) {});
    it("Should return null with invalid courseID", function (done) {});
  });
});
