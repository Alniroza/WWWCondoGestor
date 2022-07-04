import { createModule } from "graphql-modules"

import { SuperUserResolver } from "./superuser.resolver.js"
import { SuperUserType } from "./superuser.type.js"

export const SuperUserModule = createModule({
  id: 'SuperUserModule',
  typeDefs: [SuperUserType],
  resolvers: [SuperUserResolver]
})