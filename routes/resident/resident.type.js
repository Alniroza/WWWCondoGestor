import { gql } from "graphql-modules";

export const ResidentType = gql(
  `type Resident {
    _id: ID!
    name: String,
    username: String!,
    password: String!
  }

  input ResidentInput {
    name: String,
    username: String,
    password: String
  } 

  type Query {
    findOneResident(_id: ID!): Resident
    findAllResident: [Resident]  
  }

  type Mutation {
    addResident(input: ResidentInput!): Resident
    updateResident(_id: ID!, input: ResidentInput!): Resident
    deleteResident(_id: ID!): Resident
  }`
);