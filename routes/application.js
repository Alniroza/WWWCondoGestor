import { createApplication } from "graphql-modules";
import { mongoConnection } from "../database.js";

import { ResidentModule } from "./resident/resident.module.js";
import { HouseModule } from "./house/house.module.js";
import { SuperUserModule } from "./superuser/superuser.module.js";
import { TransactionModule } from  "./transaction/transaction.module.js"
import { CommonfundModule } from "./commonfund/commonfund.module.js"
import { CondominiumModule } from "./condominium/condominium.module.js";
import { HelperModule } from "../common/helpers/helper.module.js";
import { ReserveModule } from "./reserve/reserve.module.js";
import { CommonfieldModule } from "./commonfield/commonfield.module.js";
import { PeriodModule } from "./period/period.module.js";

export const application = createApplication({
  modules: [
    SuperUserModule,
    CondominiumModule,
    HouseModule, 
    CommonfieldModule,
    CommonfundModule,
    TransactionModule,
    ResidentModule, 
    HelperModule,
    ReserveModule,
    PeriodModule
  ]
})