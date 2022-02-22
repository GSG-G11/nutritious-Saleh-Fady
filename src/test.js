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

test('Testing the /searchFruits path', (done) => {
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
