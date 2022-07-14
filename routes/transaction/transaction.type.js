import { gql } from "graphql-modules";

export const TransactionType = gql(
  `type Transaction {
    _id: ID!
    houseId: ID!,
    detail: String,
    reason: String!
    amount: Float!,
    payedAmount: Float!,
    expirationFee: Float
    expirationCycle: String,
    createdAt: Date
  }

  input TransactionInput {
    houseId: ID!,
    detail: String,
    reason: String!
    amount: Float!,
    payedAmount: Float!,
    expirationFee: Float
    expirationCycle: String,
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