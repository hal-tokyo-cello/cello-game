import { accessApi, ApiError, isApiError, User } from ".";

export interface SignInRequest {
  email: string;
  password: string;
}

export type SignInResponse = User | ApiError;

export const signIn = (req: SignInRequest) =>
  accessApi<SignInRequest, SignInResponse>("users/signin", req, "POST").then(
    (data) => (isApiError(data) ? Promise.reject(data) : data)
  );
