import { RouteRecordRaw } from "vue-router";

import {
  default as DeleteAccount,
  route as DeleteAccountRoute,
} from "./DeleteAccount.vue";
import { default as MyPage, route as MyPageRoute } from "./Mypage.vue";
import {
  default as UpdateEmail,
  route as UpdateEmailRoute,
} from "./UpdateEmail.vue";
import {
  default as UpdateUsername,
  route as UpdateUsernameRoute,
} from "./UpdateUsername.vue";
import {
  default as UpdateUserPassword,
  route as UpdateUserPasswordRoute,
} from "./UpdateUserPassword.vue";

export const routes: RouteRecordRaw[] = [
  DeleteAccountRoute,
  MyPageRoute,
  UpdateEmailRoute,
  UpdateUsernameRoute,
  UpdateUserPasswordRoute,
];

export const components = {
  DeleteAccount,
  MyPage,
  UpdateEmail,
  UpdateUsername,
  UpdateUserPassword,
};
