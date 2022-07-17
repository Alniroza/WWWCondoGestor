import { gql } from "graphql-modules";

export const ReserveType = gql(
  `type Reserve {
    _id: ID!
    houseId: ID!,
    periodId: ID!,
    transactionId: ID!
    createdAt: Date
  }

  input ReserveInput {
    houseId: ID,
    periodId: ID,
    transactionId: ID
    createdAt: Date
  } 

  type Query {
    findOneReserve(_id: ID!): Reserve
    findAllReserve: [Reserve]  
    findAllReservesByResident: [Reserve]
    findAllReserveByHouse(houseId: ID!): [Reserve]
    findAllReservesByCommonfield: [Reserve]
  }

  type Mutation {
    addReserve(input: ReserveInput!): Reserve
    updateReserve(_id: ID!, input: ReserveInput!): Reserve
    deleteReserve(_id: ID!): Reserve
    
  }`
);