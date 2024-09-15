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

export interface GetCategoriesDTO {
  limit: number;
  search: string;
}

export interface GetCategoriesProps {
  limit: number;
  search: string;
}

export interface CategoryDTO {
  id: number;
  name: string;
  // subCategory?: Category[];
}

// Store
export type CategoriesStoreInit = {
  categories: CategoryDTO[];
  categorySelected: CategoryDTO | null;
  categoryLoader: boolean;
  errorMessage: string;
};

export type UserStoreInit = {
  user: UserDTO | null;
  loading: boolean;
  errorMessage: string;
};
