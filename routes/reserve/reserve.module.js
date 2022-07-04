import { createModule } from "graphql-modules"

import { ReserveResolver } from "./Reserve.resolver.js"
import { ReserveType } from "./Reserve.type.js"

export const ReserveModule = createModule({
  id: 'ReserveModule',
  typeDefs: [ReserveType],
  resolvers: [ReserveResolver]
});