export type UserResponse = {
  id: string;
  email: string;
  password:string
};

export type UserRequest = {
  email: string;
  password: string;
};

export type AuthUserResponse = {
  user: UserResponse;
  accessToken: string;
};

export interface IUserRepository {
  create(data: UserRequest): Promise<UserResponse>;
  findByEmail(email: string): Promise<UserResponse | null>;
  findById(id: string): Promise<UserResponse | null>;
}
