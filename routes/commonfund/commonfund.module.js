import { createModule } from "graphql-modules"

import { CommonFundResolver } from "./commonfund.resolver.js"
import { CommonFundType } from "./commonfund.type.js"

export const CommonFundModule = createModule({
  id: 'CommonFundModule',
  typeDefs: [CommonFundType],
  resolvers: [CommonFundResolver]
});