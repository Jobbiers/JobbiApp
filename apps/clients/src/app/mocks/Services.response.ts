import CategoryResponse from './Category.response';
import CommentsResponse from './Comments.response';
import ProfessionalsResponse from './Professionals.response';

export default [
  {
    id: 0,
    professionalId: ProfessionalsResponse[0],
    name: 'Cortador de pasto',
    categoryId: CategoryResponse[3],
    openingHours: ['09:00:00', '16:00:00'],
    isDelivery: true,
    coordinates: [-31.651833, -64.431232],
    commentsId: [CommentsResponse[0]]
  }
];
