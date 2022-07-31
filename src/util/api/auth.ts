import { accessApi, ApiError, isApiError, User } from ".";

export interface SignInRequest {
  email: string;
  password: string;
}

export type SignInResponse = User | ApiError;

export const signIn = (req: SignInRequest) =>
  accessApi<SignInRequest, SignInResponse>("users/signin", req, "POST", {
    "x-mock-response-code": "400",
  }).then((data) => (isApiError(data) ? Promise.reject(data) : data));
