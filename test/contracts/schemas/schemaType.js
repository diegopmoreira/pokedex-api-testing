const Joi = require("joi");

const schemaType = Joi.object({
  damage_relations: Joi.object({
    double_damage_from: Joi.array(),
    double_damage_to: Joi.array(),
    half_damage_from: Joi.array(),
    half_damage_to: Joi.array(),
    no_damage_from: Joi.array(),
    no_damage_to: Joi.array()
  }),
  game_indices: Joi.array(),
  generation: Joi.object({
    name: Joi.string().required(),
    url: Joi.string().required()
  }),
  id: Joi.number().integer(),
  move_damage_class: Joi.object({
    name: Joi.string().required(),
    url: Joi.string().required()
  }),
  moves: Joi.array(),
  name: Joi.string().required(),
  names: Joi.array(),
  pokemon: Joi.array()
});

module.exports = schemaType;
