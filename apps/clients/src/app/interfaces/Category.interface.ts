import { Icons } from "@jobbi/ui/src/components";

export interface Category {
  id: number;
  name: string;
  subCategory?: Category[];
  vector: string;
  type: any;
  timeStamp: string;
}

// Falta definir tipo de type
