import { gql } from "graphql-modules";

export const CommonFieldType = gql(
  `type CommonField {
    _id: ID!,
    condominiumId: ID!,
    name: String,
    description: String,
    period: String,
    periodFee: Number,
    fineFee:  Number
  }

  input CommonFieldInput {
    condominiumId: ID!,
    name: String,
    description: String,
    period: String,
    periodFee: Number,
    fineFee:  Number
  } 

  type Query {
    findOneCommonField(_id: ID!): CommonField
    findAllCommonField: [CommonField]  
    findAllCommonFieldByHouseID(house_id: ID!): [CommonField]
  }

  type Mutation {
    addCommonField(input: CommonFieldInput!): CommonField
    updateCommonField(_id: ID!, input: CommonFieldInput!): CommonField
    deleteCommonField(_id: ID!): CommonField
  }`
);