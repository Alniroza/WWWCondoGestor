import { createModule } from "graphql-modules"

import { HelperResolver } from "./helper.resolver.js"
import { HelperType } from "./helper.type.js"

export const HelperModule = createModule({
  id: 'HelperModule',
  typeDefs: [HelperType],
  resolvers: [HelperResolver]
})