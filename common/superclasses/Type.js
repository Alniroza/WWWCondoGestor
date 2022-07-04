import {gql} from 'graphql-modules'
/*
Recibe 2 strings
name: nombre de la clase que se crea
model: un string que represente el input, separado por comas. name: String, color: String ...
*/
export function TypeDefs(name, input){
  const model_str = gql(
  `type ${name} {
    id: ID!
    ${input}
  }

  input ${name}Input {
    ${input}
  } 

  type Query {
    findOne(id: ID!): ${name}
    findAll: [${name}]  
  }

  type Mutation {
    add(input: ${name}Input!): ${name}
    update(id: ID!): ${name}
    delete(id: ID!): ${name}
  }`);
  
  return model_str;
}