import { accessApi, User, UserCredential } from ".";

type DeleteUserRequest = Pick<UserCredential, "password">;

interface UpdatePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export const getUser = (user: string) =>
  accessApi<{}, { user: User }>(`users/${user}`);

export const deleteUser = (user: string, req: DeleteUserRequest) =>
  accessApi<DeleteUserRequest, {}>(`users/${user}`, req, "DELETE");

export const updatePassword = (user: string, req: UpdatePasswordRequest) =>
  accessApi<UpdatePasswordRequest, {}>(`users/${user}/password`, req, "PUT");
