import { gql } from "graphql-modules";

export const SuperUserType = gql(
  `type SuperUser {
    _id: ID!
    name: String,
    username: String!,
    password: String!
  }

  input SuperUserInput {
    name: String,
    username: String,
    password: String
  } 

  type Query {
    findOneSuperUser(_id: ID!): SuperUser
    findAllSuperUser: [SuperUser]  
    findSuperUserByUsername(username: String): SuperUser
    authSuperUser(username: String!, password: String!): Boolean
  }

  type Mutation {
    addSuperUser(input: SuperUserInput!): SuperUser
    updateSuperUser(_id: ID!, input: SuperUserInput!): SuperUser
    deleteSuperUser(_id: ID!): SuperUser
    
  }`
);