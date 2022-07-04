import { createModule } from "graphql-modules"

import { ResidentResolver } from "./resident.resolver.js"
import { ResidentType } from "./resident.type.js"

export const ResidentModule = createModule({
  id: 'ResidentModule',
  typeDefs: [ResidentType],
  resolvers: [ResidentResolver]
})