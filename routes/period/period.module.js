import { createModule } from "graphql-modules"

import { PeriodResolver } from "./period.resolver.js"
import { PeriodType } from "./period.type.js"

export const PeriodModule = createModule({
  id: 'PeriodModule',
  typeDefs: [PeriodType],
  resolvers: [PeriodResolver]
});