const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  this.timeout(5000);
  suite('Integration tests with chai-http', function () {
    // #1
    test('Test GET /api/convert with 10L', function (done) {
      chai
        .request(server)
        .get('/api/convert?input=10L')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, "10");
          assert.equal(res.body.initUnit,"L");
          assert.equal(res.body.returnNum, 2.64172);
          assert.equal(res.body.returnUnit,"gal");
          assert.equal(res.body.string,"10 liters converts to 2.64172 gallons");
          done();
        });
    });
    // #2
    test('Test GET /api/convert with 32g', function (done) {
      chai
        .request(server)
        .get('/api/convert?input=32g')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body, 'invalid unit')
          done();
        });
    });
    // #3
    test('Test GET /api/convert with 3/7.2/4kg', function (done) {
      chai
        .request(server)
        .get('/api/convert?input=3/7.2/4kg')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body, 'invalid number')
          done();
        });
    });
    // #4
    test('Test GET /api/convert with 3/7.2/4kilomegagram', function (done) {
      chai
        .request(server)
        .get('/api/convert?input=3/7.2/4kilomegagram')
        .end((err, res)=>{
          assert.equal(res.status, 200);
          assert.equal(res.body, 'invalid number and unit')
          done();
      })

    });
    //#5 
    test('Test GET /api/convert with kg', function (done) {
      chai
        .request(server)
        .get('/api/convert?input=kg')
        .end((err, res)=>{
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 1);
          assert.equal(res.body.initUnit,"kg");
          assert.equal(res.body.returnNum, 2.20462);
          assert.equal(res.body.returnUnit,"lbs");
          assert.equal(res.body.string,"1 kilograms converts to 2.20462 pounds");
          done();
      })

    });
  });
});
