import { gql } from "graphql-modules";

export const TransactionType = gql(
  `type Transaction {
    _id: ID!
    house_id: ID!,
    amount: Float!,
    payed_amount: Float!,
    detail: String,
    expirationTimestamp: Float
  }

  input TransactionInput {
    name: String,
    username: String,
    password: String
  } 

  type Query {
    findOneTransaction(_id: ID!): Transaction
    findAllTransaction: [Transaction]  
  }

  type Mutation {
    addTransaction(input: TransactionInput!): Transaction
    updateTransaction(_id: ID!, input: TransactionInput!): Transaction
    deleteTransaction(_id: ID!): Transaction
  }`
);