import { gql } from "graphql-modules";

export const ResidentType = gql(
  `type Resident {
    _id: ID!
    name: String,
    username: String!,
    password: String!,
    email: String
  }

  input ResidentInput {
    name: String,
    username: String,
    password: String,
    email: String
  } 

  type Query {
    findOneResident(_id: ID!): Resident
    findAllResident: [Resident]
    findResidentByUsername(username: String): Resident
    authResident(username: String, password: String): Boolean
  }

  type Mutation {
    addResident(input: ResidentInput!): Resident
    updateResident(_id: ID!, input: ResidentInput!): Resident
    deleteResident(_id: ID!): Resident
  }`
);