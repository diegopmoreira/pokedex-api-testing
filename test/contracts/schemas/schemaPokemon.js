const Joi = require("joi");

const schemaPokemon = Joi.object({
  id: Joi.number()
    .integer()
    .positive(),
  name: Joi.string(),
  base_experience: Joi.number()
    .integer()
    .positive(),
  height: Joi.number()
    .integer()
    .positive(),
  is_default: Joi.boolean(),
  order: Joi.number()
    .integer()
    .positive(),
  weight: Joi.number()
    .integer()
    .positive(),
  abilities: Joi.array(),
  forms: Joi.array(),
  game_indices: Joi.array(),
  held_items: Joi.array(),
  location_area_encounters: [Joi.array(), Joi.string()],
  moves: Joi.array(),
  species: Joi.object({
    url: Joi.string().uri(),
    name: Joi.string().required()
  }),
  sprites: Joi.object().keys({
    back_female: Joi.string()
      .optional()
      .allow(null),
    back_shiny_female: Joi.string()
      .optional()
      .allow(null),
    back_default: Joi.string().regex(/https:\/\//),
    front_female: Joi.string()
      .optional()
      .allow(null),
    front_shiny_female: Joi.string()
      .optional()
      .allow(null),
    back_shiny: Joi.string().uri(),
    front_default: Joi.string().uri(),
    front_shiny: Joi.string().uri()
  }),
  stats: Joi.array(),
  types: Joi.array().items({
    slot: Joi.number().positive(),
    type: Joi.object()
  })
});

module.exports = schemaPokemon;
