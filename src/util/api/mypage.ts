import { accessApi, User, UserCredential } from ".";

type DeleteUserRequest = Pick<UserCredential, "password">;

export const getUser = (user: string) =>
  accessApi<{}, { user: User }>(`users/${user}`);

export const deleteUser = (user: string, req: DeleteUserRequest) =>
  accessApi<DeleteUserRequest, {}>(`users/${user}`, req, "DELETE");
