import { Professional } from '../interfaces/Professional.interface';
import {CommentsResponse} from './Comments.response';

export const ProfessionalResponse: Professional[] = [
  {
    id: 1,
    name: 'Morrio',
    lastName: 'Gimenez',
    photo: '', // Id bucketfile Firebase or other Db
    timeStamp: 123132132,
    verified: true,
    mail: 'morriogimenez@gmail.com',
    ordersIds: [1],
    comments: CommentsResponse
  },
];
