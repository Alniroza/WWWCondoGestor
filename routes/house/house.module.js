import { createModule } from "graphql-modules"

import { HouseResolver } from "./house.resolver.js"
import { HouseType } from "./house.type.js"

export const HouseModule = createModule({
  id: 'HouseModule',
  typeDefs: [HouseType],
  resolvers: [HouseResolver]
})