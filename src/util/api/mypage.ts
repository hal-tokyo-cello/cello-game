import { accessApi, User } from ".";

export const getUser = (user: string) =>
  accessApi<{}, { user: User }>(`users/${user}`);
