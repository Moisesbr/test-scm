var chai = require('chai')
var request = require('supertest')
var should = chai.should()
var server = require('./main')

describe('GET /', function () {
  it('returns 200 status code', function (done) {
    request('http://localhost:8000').get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        done(err)
      })
  })
})

