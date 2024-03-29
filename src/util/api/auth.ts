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

export interface ResetPasswordRequest {
  requestId: string;
  password: string;
}

export interface VerifyEmailRequest {
  email: string;
  otp: string;
}

export interface VerifyEmailResponse {
  userId: string;
}

export interface ResendOtpRequest {
  email: string;
}

export interface RaceOption {
  id: number;
  display: string;
  image: string;
}

export interface RaceOptionsResponse {
  options: RaceOption[];
}

export interface SelectAvatarRequest {
  race: number;
}

export const signIn = (req: SignInRequest) =>
  accessApi<SignInRequest, SignInResponse>("users/signin", req, "POST").then(
    (data) => (isApiError(data) ? Promise.reject(data) : data)
  );

export const signUp = (req: SignUpRequest) =>
  accessApi<SignUpRequest, SignUpResponse>("users/signup", req, "POST");

export const forget = (req: ForgetPasswordRequest) =>
  accessApi<ForgetPasswordRequest, {}>("forgetpassword", req, "POST");

export const reset = (req: ResetPasswordRequest) =>
  accessApi("resetpassword", req, "POST");

export const verify = (req: VerifyEmailRequest) =>
  accessApi<VerifyEmailRequest, VerifyEmailResponse>(
    "users/signup/verify",
    req,
    "POST"
  );

export const resend = (req: ResendOtpRequest) =>
  accessApi("users/signup/resend", req, "POST");

export const getAvatarRaceOptions = () =>
  accessApi<{}, RaceOptionsResponse>("avatars", undefined, "GET");

export const selectAvatar = (user: string, req: SelectAvatarRequest) =>
  accessApi<SelectAvatarRequest, {}>(`users/${user}/avatar`, req, "POST");
