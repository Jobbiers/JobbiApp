export interface Category {
  id: number;
  name: string;
  subCategory?: Category[];
  vector: string;
  timeStamp: string;
}
