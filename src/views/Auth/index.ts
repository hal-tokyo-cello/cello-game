import { RouteRecordRaw } from "vue-router";

import {
  default as ForgetPassword,
  route as ForgetPasswordRoute,
} from "./Forget.vue";
import { default as Profile, route as ProfileRoute } from "./Profile.vue";
import { default as Reset, route as ResetRoute } from "./Reset.vue";
import { default as SignIn, route as SignInRoute } from "./Signin.vue";
import { default as SignUp, route as SignUpRoute } from "./Signup.vue";
import {
  default as VerifyEmail,
  route as VerifyEmailRoute,
} from "./Verification.vue";

export const routes: RouteRecordRaw[] = [
  ForgetPasswordRoute,
  ProfileRoute,
  ResetRoute,
  SignInRoute,
  SignUpRoute,
  VerifyEmailRoute,
];

export const components = {
  ForgetPassword,
  Profile,
  Reset,
  SignIn,
  SignUp,
  VerifyEmail,
};
