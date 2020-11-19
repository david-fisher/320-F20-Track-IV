// import chai from 'chai';
// import chaiHttp from 'chai-http';
import app from '../index.js';
import request from 'supertest';
import assert from 'assert';

describe('GET /login', function() {
  it('Should return auth token', function(done) {
    request(app)
      .get('/api/v1/login')
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.set('Accept-Encoding', 'gzip, deflate, br')
      .expect(200, done)
			// .expect(response => {
				// response.body.token = "abcdefghijklmnopqrstuvwxyz";
			// }, done)
  });
});
describe("GET /instructor/dashboard (no auth)", () => {
	it("Should return authorization error", (done) => {
		request(app)
      .get('/api/v1/instructor/dashboard')
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.set('Accept-Encoding', 'gzip, deflate, br')
      .expect((res) => {

			})
		// chai.request(app)
		// 	.get(`{PREFIX}/instructor/dashboard`)
		// 	.set('Authorization', 'Bearer abcdefghijklmnopqrstuvwxyz')
		// 	.set('Content-Type', 'application/json')
		// 	.set('Accept', 'application/json')
		// 	.set('Accept-Encoding', 'gzip, deflate, br')
		// 	.end((err, res) => {
		// 		res.should.have.status(200);
		// 		done();
		// 	});
	});
});
describe("GET /instructor/dashboard (auth)", () => {
	it("Should return open, closed, drafted simulations", (done) => {
		let token = "abcdefghijklmnopqrstuvwxyz";
		let data = {open: [], closed: [], drafts: []};
		// chai.assert(token === "abcdefghijklmnopqrstuvwxyz" && "open" in data && "closed" in data && "drafts" in data);
		done();
		// chai.request(app)
		// 	.get(`{PREFIX}/instructor/dashboard`)
		// 	.set('Authorization', 'Bearer abcdefghijklmnopqrstuvwxyz')
		// 	.set('Content-Type', 'application/json')
		// 	.set('Accept', 'application/json')
		// 	.set('Accept-Encoding', 'gzip, deflate, br')
		// 	.end((err, res) => {
		// 		res.should.have.status(200);
		// 		done();
			});
});

// let PREFIX="/api/v1";
//
// chai.use(chaiHttp);
// chai.should();
//
// describe("Instructors", () => {
// 	describe("GET /login", () => {
// 		it("Should return token", (done) => {
// 			let token = "abcdefghijklmnopqrstuvwxyz";
// 			chai.assert(token === "abcdefghijklmnopqrstuvwxyz");
// 			done();
// 			// chai.request(app)
// 			// 	.get(`{PREFIX}/login`)
// 			// 	.set('Content-Type', 'application/json')
// 			// 	.set('Accept', 'application/json')
// 			// 	.set('Accept-Encoding', 'gzip, deflate, br')
			// 	.end((err, res) => {
			// 		res.should.have.status(200);
			// 		done();
// 			// 	});
// 		});
// 	});
	// describe("GET /instructor/dashboard (no auth)", () => {
	// 	it("Should return authorization error", (done) => {
	// 		let token = "abcdefghijklmnopqrstuvwxyz";
	// 		let data = {open: [], closed: [], drafts: []};
	// 		chai.assert(token === "abcdefghijklmnopqrstuvwxyz" && "open" in data && "closed" in data && "drafts" in data);
	// 		done();
	// 		// chai.request(app)
	// 		// 	.get(`{PREFIX}/instructor/dashboard`)
	// 		// 	.set('Authorization', 'Bearer abcdefghijklmnopqrstuvwxyz')
	// 		// 	.set('Content-Type', 'application/json')
	// 		// 	.set('Accept', 'application/json')
	// 		// 	.set('Accept-Encoding', 'gzip, deflate, br')
	// 		// 	.end((err, res) => {
	// 		// 		res.should.have.status(200);
	// 		// 		done();
	// 		// 	});
	// 	});
	// });
	// describe("GET /instructor/dashboard (auth)", () => {
	// 	it("Should return open, closed, drafted simulations", (done) => {
	// 		let token = "abcdefghijklmnopqrstuvwxyz";
	// 		let data = {open: [], closed: [], drafts: []};
	// 		chai.assert(token === "abcdefghijklmnopqrstuvwxyz" && "open" in data && "closed" in data && "drafts" in data);
	// 		done();
	// 		// chai.request(app)
	// 		// 	.get(`{PREFIX}/instructor/dashboard`)
	// 		// 	.set('Authorization', 'Bearer abcdefghijklmnopqrstuvwxyz')
	// 		// 	.set('Content-Type', 'application/json')
	// 		// 	.set('Accept', 'application/json')
	// 		// 	.set('Accept-Encoding', 'gzip, deflate, br')
	// 		// 	.end((err, res) => {
	// 		// 		res.should.have.status(200);
	// 		// 		done();
	// 		// 	});
	// 	});
// 	});
// });
