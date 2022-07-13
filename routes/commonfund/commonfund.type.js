import { gql } from "graphql-modules";

export const CommonfundType = gql(
  `type Commonfund {
    _id: ID!
    houseId: ID!,
    amount: Int!,
    detail: String,
    expirationDays: Int,
  }

  input CommonfundInput {
    houseId: ID!,
    amount: Int!,
    detail: String,
    expirationDays: Int
  }

  type Query {
    findOneCommonfund(_id: ID!): Commonfund
    findAllCommonfund: [Commonfund]  
    findAllCommonfundByHouseID(houseId: ID!): [Commonfund]
  }

  type Mutation {
    addCommonfund(input: CommonfundInput!): Commonfund
    updateCommonfund(_id: ID!, input: CommonfundInput!): Commonfund
    deleteCommonfund(_id: ID!): Commonfund
  }`
);