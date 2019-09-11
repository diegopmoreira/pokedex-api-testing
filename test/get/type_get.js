const request = require("supertest");
const assert = require("chai").assert;

const url = "https://pokeapi.co/api/v2";
const _ = require("lodash");

describe("Pokedex tests", () => {
  before(done => {
    request(url)
      .get("/pokemon/")
      .end((err, res) => {
        pokemon = _.sample(res.body.results);
        pokemon.id = pokemon.url.split(url)[1].split("/")[0];
        done(err);
      });
  });

  describe("GET /pokemon/{id or name}", () => {
    it("name must be valid", done => {
      request(url)
        .get(`/pokemon/${pokemon.name}/`)
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.name, pokemon.name);
          assert.equal(res.body.id, pokemon.id);
          done(err);
        });
    });

    it('with invalid "name" ', done => {
      request(url)
        .get("/pokemon/agumon/")
        .expect(404, done);
    });

    it("id must be valid", done => {
      request(url)
        .get(`/pokemon/${pokemon.id}/`)
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.name, pokemon.name);
          assert.equal(res.body.id, pokemon.id);
          done(err);
        });
    });

    it('with invalid "id" ', done => {
      request(url)
        .get("/pokemon/96669/")
        .expect(404, done);
    });
  });
});
