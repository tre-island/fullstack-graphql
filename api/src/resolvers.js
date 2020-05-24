/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    hero(_,{input},{models}){
      return models.Hero.findOne(input)
    },

    heroes(_,{input},{models}){
      return models.Hero.findMany(input)
    }
  },
  
  Mutation:{
    newHero(_,{input},{models}){
      return models.Hero.create(input)
    }
  },

  Hero: {
    
  }
}
