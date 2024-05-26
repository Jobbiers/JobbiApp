import { Business } from './Business.interface';
import { Comment } from './Comment.interface';
import { Orders } from './Orders.interface';

export interface Professional {
  id: number;
  name: string;
  lastName: string;
  photo: string; // Id bucketfile Firebase or other Db
  timeStamp: number;
  mail: string;
  verified: boolean;
  ordersIds: number[];
  comments: Comment[];
}
