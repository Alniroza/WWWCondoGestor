import { gql } from "graphql-modules";

export const PeriodType = gql(
  `type Period {
    _id: ID!,
    commonfieldId: ID!,
    startDate: Date!,
    endDate: Date!,
    reserved: Boolean
  }

  input PeriodInput {
    commonfieldId: ID,
    startDate: Date,
    endDate: Date,
    reserved: Boolean
  } 

  type Query {
    findOnePeriod(_id: ID!): Period
    findAllPeriod: [Period]
    findAllPeriodByCommonfield(commonfieldId: ID!): [Period]
  }

  type Mutation {
    addPeriod(input: PeriodInput!): Period
    updatePeriod(_id: ID!, input: PeriodInput!): Period
    deletePeriod(_id: ID!): Period
    reservePeriod(houseId: ID!, periodId: ID!): Transaction
  }`
);