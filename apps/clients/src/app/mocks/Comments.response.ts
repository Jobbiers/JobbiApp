import { Comment } from "../interfaces/Comment.interface";

export const CommentsResponse: Comment[] = [
  {
    id: 1,
    serviceId: 1,
    date: JSON.stringify(new Date().toString),
    description: 'Muy buen servicio, lo recomiendo',
    stars: 3,
    likes: 1,
    disLikes: 0,
    professionalId: 1
  },
];
