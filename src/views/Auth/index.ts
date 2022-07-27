import { RouteRecordRaw } from "vue-router";

import ForgetPassword from "./Forget.vue";
import Signin from "./Signin.vue";
import Signup from "./Signup.vue";
import VerifyEmail from "./Verification.vue";

export const routes: RouteRecordRaw[] = [
  { path: "/auth/forgetpassword", component: ForgetPassword },
  { path: "/auth/signin", component: Signin },
  { path: "/auth/signup", component: Signup },
  { path: "/auth/signup/verification", component: VerifyEmail },
];
