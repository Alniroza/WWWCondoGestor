import { createModule } from "graphql-modules"

import { CondominiumResolver } from "./condominium.resolver.js"
import { CondominiumType } from "./condominium.type.js"

export const CondominiumModule = createModule({
  id: 'Condominiummodule',
  typeDefs: [CondominiumType],
  resolvers: [CondominiumResolver]
})