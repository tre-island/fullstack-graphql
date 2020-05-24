const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`

    input NewHeroInput{
        codeName:String!
        secretName:String!
        homeBase:String!
    }
    
    input HeroSearch{
        codeName:String
        secretName:String
        homeBase:String
    }

    type Hero{
        id:ID!
        createdAt:String!
        codeName:String!
        secretName:String!
        homeBase:String!
    }

    type Query{
        hero(input:HeroSearch):Hero!
        heroes(input:HeroSearch):[Hero]!

    }
    
    type Mutation{
        newHero(input:NewHeroInput!): Hero!
    }
`;

module.exports = typeDefs
