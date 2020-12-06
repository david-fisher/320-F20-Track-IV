/* eslint-env mocha */
const db = require("../db");
const assert = require("assert");
let server = require('../server');
var chai = require('chai');
var should = chai.should();

describe("issues DB access points test", function () {
  before(function () {});
  after(function () {});
  describe("test getIssue", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should return a valid issue with valid issueID", function (done) {
       const id = 1
       chai.request(server)
            .get('/issues/${id}')
            .end((err, res) =>{
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('success').eql(true);
              done();
            });
    });
    it("Should return null with invalid issueID", function (done) {
      // invalid id
      const id = -1;
      chai.request(server)
           .get('/issues/${id}')
           .end((err, res) =>{
             // httpStatusCode.failed.NOT_FOUND
             res.should.have.status(404);
             res.body.should.be.a('object');
             done();
           });
    });
  });

  describe("test updateIssue", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should update a valid issue with valid issueID, name, description", function (done) {
        const id = 1
        chai.request(server)
            .get('/issues/${id}')
            .send({'name' : 'Issue-1', 'description' : 'First Description'})
            .end((err, res) =>{
              // status of success updateIssue
              res.should.have.status(201);
              res.body.should.be.a('object');
              res.body.should.have.property('success').eql(true);
              done();
            });
    });
    it("Should return null with invalid issueID", function (done) {
      const id = -1
      chai.request(server)
          .get('/issues/${id}')
          .send({'name' : 'Issue-1', 'description' : 'First Description'})
          .end((err, res) =>{
            // httpStatusCode.failed.NOT_FOUND
            res.should.have.status(404);
            res.body.should.be.a('object');
            done();
          });
    });
    it("Should throw error with invalid name", function (done) {
      const id = 1
      chai.request(server)
          .get('/issues/${id}')
          .send({'name' : 'Invalid Issue name', 'description' : 'Valid Description'})
          .end((err, res) =>{
            // httpStatusCode.failed.BAD_REQUEST
            res.should.have.status(400);
            res.body.should.be.a('object');
            done();
          });
    });
    it("Should throw error with invalid description", function (done) {
      const id = 1
      chai.request(server)
          .get('/issues/${id}')
          .send({'name' : 'Valid Issue name', 'description' : 'InValid Description'})
          .end((err, res) =>{
            // httpStatusCode.failed.BAD_REQUEST
            res.should.have.status(400);
            res.body.should.be.a('object');
            done();
          });
    });
  });

  describe("test createIssue", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should create a valid issue with valid name, description", function (done) {
    });
    it("Should throw error with invalid name", function (done) {});
    it("Should throw error with invalid description", function (done) {});
  });

  describe("test deleteIssue", function () {
    before(function () {});
    after(function () {});
    beforeEach(function () {});
    afterEach(function () {});
    it("Should delete a valid issue with valid issueID", function (done) {});
    it("Should return null with invalid issueID", function (done) {});
  });
});
