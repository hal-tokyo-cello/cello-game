import { RouteRecordRaw } from "vue-router";

import { route as DeleteAccount } from "./DeleteAccount.vue";
import { route as MyPage } from "./Mypage.vue";
import { route as UpdateEmail } from "./UpdateEmail.vue";
import { route as UpdateUsername } from "./UpdateUserName.vue";
import { route as UpdateUserPassword } from "./UpdateUserPassword.vue";

export const routes: RouteRecordRaw[] = [
  DeleteAccount,
  MyPage,
  UpdateEmail,
  UpdateUsername,
  UpdateUserPassword,
];
