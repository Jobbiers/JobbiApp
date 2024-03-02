import { Category } from './Category.interface';

export interface Services {
  id: number;
  businessId: number;
  name: string;
  professionalId: number;
  isDelivery: boolean;
  categoryId: Category;
  coordinates: TwoNumberArray;
  commentsId: Comment[];
  estimatedPrize: TwoNumberArray;
}

export type TwoNumberArray = [number, number];
