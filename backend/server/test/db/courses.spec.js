/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("courses DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getCourse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid course with valid courseID", function (done) {});
    it("Should return null with invalid courseID", function (done) {});
  });

  describe("test getCoursesBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid courses with valid webpage", function (done) {});
    it("Should return valid courses with valid name", function (done) {});
    it("Should return valid courses with valid semester", function (done) {});
    it("Should return valid courses with valid webpage, name, semester", function (done) {});
    it("Should return no courses with invalid webpage", function (done) {});
    it("Should return no courses with invalid name", function (done) {});
    it("Should return no courses with invalid semester", function (done) {});
    it("Should return no courses with invalid webpage, name, semester", function (done) {});
  });

  describe("test createCourse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid course with valid webpage, name, semester", function (done) {});
    it("Should throw error with invalid webpage", function (done) {});
    it("Should throw error with invalid name", function (done) {});
    it("Should throw error with invalid semester", function (done) {});
  });

  describe("test updateCourse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid course with valid courseID, webpage, name, semester", function (done) {});
    it("Should return null with invalid courseID", function (done) {});
    it("Should throw error with invalid webpage", function (done) {});
    it("Should throw error with invalid name", function (done) {});
    it("Should throw error with invalid semester", function (done) {});
  });

  describe("test deleteCourse", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid course with valid courseID", function (done) {});
    it("Should return null with invalid courseID", function (done) {});
  });
});
