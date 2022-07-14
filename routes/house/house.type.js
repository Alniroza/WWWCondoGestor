import { gql } from "graphql-modules";

export const HouseType = gql(
  `type House {
    _id: ID!
    condominiumId: ID!
    residentsId: [ID]
    name: String!
  }

  input HouseInput {
    condominiumId: ID
    residentsId: [ID]
    name: String
  } 

  type Query {
    findOneHouse(_id: ID!): House
    findAllHouse: [House]
    findAllHousesByResident: [House]
    findAllHousesByCondominium: [House]
  }

  type Mutation {
    addHouse(input: HouseInput!): House
    updateHouse(_id: ID!, input: HouseInput!): House
    deleteHouse(_id: ID!): House
    addResidentToHouse(houseId: ID!, residentId: ID!): House
  }`
);