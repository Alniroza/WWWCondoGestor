import { createModule } from "graphql-modules"

import { CommonfundResolver } from "./Commonfund.resolver.js"
import { CommonfundType } from "./Commonfund.type.js"

export const CommonfundModule = createModule({
  id: 'CommonfundModule',
  typeDefs: [CommonfundType],
  resolvers: [CommonfundResolver]
});