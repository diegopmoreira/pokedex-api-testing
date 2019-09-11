const request = require("supertest");
const assert = require("chai").assert;
const joiAssert = require("joi-assert");

const url = "https://pokeapi.co/api/v2";
const schemaPokemon = require("./schemas/schemaPokemon");

describe("Contract Tests PokeAPI", () => {
  describe("GET /pokemon/{id or name}", () => {
    let pokemon = {
      id: 1,
      name: "bulbasaur"
    };

    it("response as the schema", done => {
      request(url)
        .get(`/pokemon/${pokemon.id}/`)
        .end((err, res) => {
          assert.equal(res.status, 200);
          joiAssert(res.body, schemaPokemon, "Pokemon Joi Error");
          done(err);
        });
    });
  });
});
