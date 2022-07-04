import { createModule } from "graphql-modules"

import { HouseResolver } from "./house.resolver.js"
import { HouseType } from "./house.type.js"

export const HouseModule = createModule({
  id: 'Housemodule',
  typeDefs: [HouseType],
  resolvers: [HouseResolver]
})