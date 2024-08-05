import { Category } from "../../interfaces/Category.interface"

export interface CategoriesStoreInit {
    categories: Category[] | null;
    categorySelected: Category | null;
    categoryLoader: boolean;
    errorMessage: string;
}