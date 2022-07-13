import { gql } from "graphql-modules";

export const TransactionType = gql(
  `type Transaction {
    _id: ID!
    houseId: ID!,
    reason: String!
    amount: Float!,
    payedAmount: Float!,
    detail: String,
    expirationDate: Date
    createdAt: Date
  }

  input TransactionInput {
    houseId: ID,
    reason: String!
    amount: Float!,
    payedAmount: Float!,
    detail: String,
    expirationDate: Date
    createdAt: Date
  } 

  type Query {
    findOneTransaction(_id: ID!): Transaction
    findAllTransaction: [Transaction]  
  }

  type Mutation {
    addTransaction(input: TransactionInput!): Transaction
    updateTransaction(_id: ID!, input: TransactionInput!): Transaction
    deleteTransaction(_id: ID!): Transaction
    payTransaction(transactionId: ID!, payedAmount: Int): Transaction
  }`
);