var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('v1ChaseGET', function() {

    describe('GET /chase', function() {

      it('should return an error if required parameters are not given', function(done) {

        request(server)
          .get('/api/v1/chase')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(500)
          .end(function(err, res) {
            should.not.exist(err);

            //res.body.should.eql('Hello, stranger!');

            done();
          });
      });

      it('should accept four parameters', function(done) {

        request(server)
          .get('/hello')
          .query({ r: 0, g: 0, b:255, speed: "normal"})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            //res.body.should.eql('Hello, Scott!');

            done();
          });
      });

    });

  });

});
