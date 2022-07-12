import mongoose from 'mongoose';
import { GraphQLScalarType } from 'graphql';

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString();
  }
});

const Query = {
}

const Mutation = {
}

export const HelperResolver = {
  Date: dateScalar,
  Query: Query,
  Mutation: Mutation
}