import { createModule } from "graphql-modules"

import { CommonfieldResolver } from "./Commonfield.resolver.js"
import { CommonfieldType } from "./Commonfield.type.js"

export const CommonfieldModule = createModule({
  id: 'CommonfieldModule',
  typeDefs: [CommonfieldType],
  resolvers: [CommonfieldResolver]
});