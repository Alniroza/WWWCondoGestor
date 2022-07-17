import { gql } from "graphql-modules";

export const CondominiumType = gql(
  `type Condominium {
    _id: ID!
    owner_id: ID!
    name: String
  }

  input CondominiumInput {
    owner_id: ID
    name: String
  } 

  type Query {
    findOneCondominium(_id: ID!): Condominium
    findAllCondominium: [Condominium]
    findByOwnerIdCondominium(owner_id: ID!):[Condominium]
  }

  type Mutation {
    addCondominium(input: CondominiumInput!): Condominium
    updateCondominium(_id: ID!, input: CondominiumInput!): Condominium
    deleteCondominium(_id: ID!): Condominium
  }`
);