const request = require("supertest");
const assert = require("chai").assert;

const url = "https://pokeapi.co/api/v2";
const _ = require("lodash");

describe("Pokedex tests", () => {
  before(done => {
    request(url)
      .get("/type/")
      .end((err, res) => {
        type = _.sample(res.body.results);
        done(err);
      });
  });

  describe("GET /type/{id or name}", () => {
    it("name must be valid", done => {
      request(url)
        .get(`/type/${type.name}/`)
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.name, type.name);
          done(err);
        });
    });

    it('with invalid "name" ', done => {
      request(url)
        .get("/type/fogo/")
        .expect(404, done);
    });
  });
});
