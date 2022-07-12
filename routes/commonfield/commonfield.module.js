import { createModule } from "graphql-modules"

import { CommonFieldResolver } from "./commonfield.resolver.js"
import { CommonFieldType } from "./commonfield.type.js"

export const CommonFieldModule = createModule({
  id: 'CommonFieldModule',
  typeDefs: [CommonFieldType],
  resolvers: [CommonFieldResolver]
});