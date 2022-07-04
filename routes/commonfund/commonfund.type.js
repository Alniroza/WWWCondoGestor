import { gql } from "graphql-modules";

export const CommonFundType = gql(
  `type CommonFund {
    _id: ID!
    house_id: ID!,
    amount: Float!,
    payed_amount: Float!,
    detail: String,
    expiration_timestamp: Int
  }

  input CommonFundInput {
    house_id: ID,
    amount: Float,
    payed_amount: Float,
    detail: String,
    expiration_timestamp: Int
  } 

  type Query {
    findOneCommonFund(_id: ID!): CommonFund
    findAllCommonFund: [CommonFund]  
  }

  type Mutation {
    addCommonFund(input: CommonFundInput!): CommonFund
    updateCommonFund(_id: ID!, input: CommonFundInput!): CommonFund
    deleteCommonFund(_id: ID!): CommonFund
  }`
);