export type IDispatch = (arg0: { payload: any; type: string }) => void;

export interface UserDTO {
  id: number;
  name: string;
  lastName: string;
  address?: string;
  email: string;
  phone?: number;
  expoToken?: string;
  createdAt: string;
}

export interface CreateUserDTO {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}
