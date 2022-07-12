import { createApplication } from "graphql-modules";
import { mongoConnection } from "../database.js";

import { ResidentModule } from "./resident/resident.module.js";
import { HouseModule } from "./house/house.module.js";
import { SuperUserModule } from "./superuser/superuser.module.js";
import { TransactionModule } from  "./transaction/transaction.module.js"
import { CommonFundModule } from "./commonfund/commonfund.module.js"
import { CondominiumModule } from "./condominium/condominium.module.js";
import { HelperModule } from "../common/helpers/helper.module.js";

export const application = createApplication({
  modules: [
    ResidentModule, 
    HouseModule, 
    SuperUserModule,
    TransactionModule,
    CommonFundModule,
    CondominiumModule,
    HelperModule
  ]
})