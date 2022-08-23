import { RouteRecordRaw } from "vue-router";

import { route as ForgetPassword } from "./Forget.vue";
import { route as Profile } from "./Profile.vue";
import { route as Reset } from "./Reset.vue";
import { route as SignIn } from "./Signin.vue";
import { route as SignUp } from "./Signup.vue";
import { route as VerifyEmail } from "./Verification.vue";

export const routes: RouteRecordRaw[] = [
  ForgetPassword,
  Profile,
  Reset,
  SignIn,
  SignUp,
  VerifyEmail,
];
