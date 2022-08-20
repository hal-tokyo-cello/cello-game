import { accessApi, ApiError, isApiError, User } from ".";

export interface UserCredential {
  email: string;
  password: string;
}

export type SignInRequest = UserCredential;
export type SignInResponse = User | ApiError;

export type SignUpRequest = UserCredential;
export type SignUpResponse = {};

export interface ForgetPasswordRequest {
  email: string;
}

export const signIn = (req: SignInRequest) =>
  accessApi<SignInRequest, SignInResponse>("users/signin", req, "POST").then(
    (data) => (isApiError(data) ? Promise.reject(data) : data)
  );

export const signUp = (req: SignUpRequest) =>
  accessApi<SignUpRequest, SignUpResponse>("users/signup", req, "POST");

export const forget = (req: ForgetPasswordRequest) =>
  accessApi<ForgetPasswordRequest, {}>("users/forget", req, "POST");
