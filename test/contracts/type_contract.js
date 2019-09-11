const request = require("supertest");
const assert = require("chai").assert;
const joiAssert = require("joi-assert");

const url = "https://pokeapi.co/api/v2";
const schemaType = require("./schemas/schemaType");

describe("Contract Tests PokeAPI", () => {
  describe("GET /type/{id or name}", () => {
    let type = {
      id: 1,
      name: "normal"
    };

    it("response as the schema", done => {
      request(url)
        .get(`/type/${type.id}/`)
        .end((err, res) => {
          assert.equal(res.status, 200);
          joiAssert(res.body, schemaType, "Type Joi Error");
          done(err);
        });
    });
  });
});
