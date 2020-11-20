/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");

describe("users DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getUser", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid user with valid userID", function (done) {});
    it("Should return null with invalid userID", function (done) {});
  });

  describe("test getUsersBy", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return valid users with valid fullName", function (done) {});
    it("Should return valid users with valid email", function (done) {});
    it("Should return valid users with valid demographics", function (done) {});
    it("Should return no users with invalid fullName", function (done) {});
    it("Should return no users with invalid email", function (done) {});
    it("Should return no users with invalid demographics", function (done) {});
  });

  describe("test createUser", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid user with valid fullName, email, demographics", function (done) {});
    it("Should throw error with invalid fullName", function (done) {});
    it("Should throw error with invalid email", function (done) {});
    it("Should throw error with invalid demographics", function (done) {});
    it("Should throw error when a user exists with email", function (done) {});
  });

  describe("test updateUser", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid user with valid userID, fullName, email, demographics", function (done) {});
    it("Should return null with invalid userID", function (done) {});
    it("Should throw error with invalid bodyText", function (done) {});
    it("Should throw error with invalid fullName", function (done) {});
    it("Should throw error with invalid email", function (done) {});
    it("Should throw error with invalid demographics", function (done) {});
  });

  describe("test deleteUser", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid user with valid userID", function (done) {});
    it("Should return null with invalid userID", function (done) {});
  });
});
