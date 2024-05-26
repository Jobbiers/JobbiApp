import CategoryResponse from './Category.response';
import CommentsResponse from './Comments.response';
import ProfessionalsResponse from './Professionals.response';

export default [
  {
    id: 1,
    businessId: 1,
    name: 'Cortada de pasto',
    professionalId: 1,
    isDelivery: true,
    categoryId: CategoryResponse[3],
    coordinates: [-31.651833, -64.431232],
    commentsId: [CommentsResponse[1]],
    estimatedPrize: [3000, 6000]
  }
];
