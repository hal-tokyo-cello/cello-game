import { RouteRecordRaw } from "vue-router";

import { route as ForgetPassword } from "./Forget.vue";
import { route as SignIn } from "./Signin.vue";
import { route as SignUp } from "./Signup.vue";
import { route as VerifyEmail } from "./Verification.vue";

export const routes: RouteRecordRaw[] = [
  ForgetPassword,
  SignIn,
  SignUp,
  VerifyEmail,
];
