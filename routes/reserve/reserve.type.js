import { gql } from "graphql-modules";

export const ReserveType = gql(
  `type Reserve {
    _id: ID!
    houseId: ID!,
    commonfundId: ID!,
    payed: Boolean
    date: Date
  }

  input ReserveInput {
    name: String,
    username: String,
    password: String
  } 

  type Query {
    findOneReserve(_id: ID!): Reserve
    findAllReserve: [Reserve]  
  }

  type Mutation {
    addReserve(input: ReserveInput!): Reserve
    updateReserve(_id: ID!, input: ReserveInput!): Reserve
    deleteReserve(_id: ID!): Reserve
  }`
);