import { gql } from "graphql-modules";

export const CommonfieldType = gql(
  `type Commonfield {
    _id: ID!,
    condominiumId: ID!,
    name: String!,
    description: String,
    period: String,
    periodFee: Float!
  }

  input CommonfieldInput {
    condominiumId: ID!,
    name: String,
    description: String,
    period: String,
    periodFee: Int
  } 

  type Query {
    findOneCommonfield(_id: ID!): Commonfield
    findAllCommonfield: [Commonfield]  
    findAllCommonfieldByCondominiumId(condominiumId: ID!): [Commonfield]
    findCommonfieldsById(_id: [ID!]): [Commonfield]
  }

  type Mutation {
    addCommonfield(input: CommonfieldInput!): Commonfield
    updateCommonfield(_id: ID!, input: CommonfieldInput!): Commonfield
    deleteCommonfield(_id: ID!): Commonfield
  }`
);