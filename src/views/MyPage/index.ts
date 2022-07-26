import { RouteRecordRaw } from "vue-router";

import DeleteAccount from "./DeleteAccount.vue";
import MyPage from "./Mypage.vue";
import UpdateUserInfo from "./UpdateUserInfo.vue";
import UpdateUserPassword from "./UpdateUserPassword.vue";

export const routes: RouteRecordRaw[] = [
  { path: "/mypage", component: MyPage },
  { path: "/mypage/deleteaccount", component: DeleteAccount },
  { path: "/mypage/password", component: UpdateUserPassword },
  { path: "/mypage/update", component: UpdateUserInfo },
];
