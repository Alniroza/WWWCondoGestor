import { createModule } from "graphql-modules"

import { TransactionResolver } from "./transaction.resolver.js"
import { TransactionType } from "./transaction.type.js"

export const TransactionModule = createModule({
  id: 'TransactionModule',
  typeDefs: [TransactionType],
  resolvers: [TransactionResolver]
})