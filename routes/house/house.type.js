import { gql } from "graphql-modules";

export const HouseType = gql(
  `type House {
    _id: ID!
    condominium_id: ID!
    residents_id: [ID]
    name: String!
  }

  input HouseInput {
    condominium_id: ID
    residents_id: [ID]
    name: String
  } 

  type Query {
    findOneHouse(_id: ID!): House
    findAllHouse: [House]  
  }

  type Mutation {
    addHouse(input: HouseInput!): House
    updateHouse(_id: ID!, input: HouseInput!): House
    deleteHouse(_id: ID!): House
  }`
);