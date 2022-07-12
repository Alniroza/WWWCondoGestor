import { gql } from "graphql-modules";

export const CommonFundType = gql(
  `type CommonFund {
    _id: ID!
    houseId: ID!,
    amount: Int!,
    detail: String,
    expirationDays: Int,
  }

  input CommonFundInput {
    houseId: ID!,
    amount: Int!,
    detail: String,
    expirationDays: Int,

  type Query {
    findOneCommonFund(_id: ID!): CommonFund
    findAllCommonFund: [CommonFund]  
    findAllCommonFundByHouseID(house_id: ID!): [CommonFund]
  }

  type Mutation {
    addCommonFund(input: CommonFundInput!): CommonFund
    updateCommonFund(_id: ID!, input: CommonFundInput!): CommonFund
    deleteCommonFund(_id: ID!): CommonFund
  }`
);