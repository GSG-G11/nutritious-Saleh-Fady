const { expect } = require('@jest/globals');
const supertest = require('supertest');

const app = require('./app');

test('Testing the /gitfruites path', (done) => {
  supertest(app)
    .get('/getfruites')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }

      expect(res.body.length >= 1).toBe(true);
      done();
    });
});
test('Testing the 404 server error path', (done) => {
  supertest(app)
    .get('/getfruitesdfsdfs')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      done();
    });
});

test('Testing the /search path', (done) => {
  supertest(app)
    .post('/search')
    .send({ name: 'banana' })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      const response = JSON.parse(res.text);
      const { data } = response;
      expect(data.name).toBe('Banana');
      done();
    });
});
test('Testing the /search path with not valid name', (done) => {
  supertest(app)
    .post('/search')
    .send({ name: 'fady saleh' })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      const response = JSON.parse(res.text);
      const { data } = response;
      expect(data.error).toBe('The fruit was not found');
      done();
    });
});
