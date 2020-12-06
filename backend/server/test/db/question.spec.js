/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");
let server = require('../server');
var chai = require('chai');
var should = chai.should();

describe("question DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getQuestion", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid question with valid questionID", function (done) {
      // valid question_id
      const id = 1
      chai.request(server)
           .get('/question/${id}')
           .end((err, res) =>{
             res.should.have.status(200);
             res.body.should.be.a('object');
             res.body.should.have.property('success').eql(true);
             done();
           });
    });
    it("Should return null with invalid questionID", function (done) {

      // InValid question_id
      const id = -1
      chai.request(server)
           .get('/question/${id}')
           .end((err, res) =>{
             res.should.have.status(404);
             res.body.should.be.a('object');
             done();
           });
    });
  });

  describe("test updateQuestion", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid question with valid questionID, question", function (done) {
      const id = 1
      chai.request(server)
          .get('/question/${id}')
          .send({'question' : 'This is content of question'})
          .end((err, res) =>{
            // status of success updateIssue
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('success').eql(true);
            done();
          });
    });
    it("Should return null with invalid questionID", function (done) {

      // InValid question_id
      const id = -1
      chai.request(server)
          .get('/question/${id}')
          .send({'question' : 'This is content of question'})
          .end((err, res) =>{
            // httpStatusCode.failed.NOT_FOUND
            res.should.have.status(404);
            res.body.should.be.a('object');
            done();
          });
    });
    it("Should throw error with invalid question", function (done) {
      const id = 1
      chai.request(server)
          .get('/question/${id}')
          .send({'question' : 'InValid question content'})
          .end((err, res) =>{
            // httpStatusCode.failed.BAD_REQUEST
            res.should.have.status(400);
            res.body.should.be.a('object');
            done();
          });
    });
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

  describe("test deleteQuestion", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid question with valid questionID", function (done) {});
    it("Should return null with invalid questionID", function (done) {});
  });
});
