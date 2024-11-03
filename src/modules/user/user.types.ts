export type UserResponse = {
  id: string;
  email: string;
  password: string;
};

export type UserRequest = {
  email: string;
  password: string;
};

export type AuthUserResponse = {
  user: UserResponse;
  accessToken: string;
};

export interface IUserRepository {}
