import OrdersResponse from './Orders.response';

export default [
  {
    id: 0,
    name: 'Morrio',
    lastName: 'Gimenez',
    photo: '', // Id bucketfile Firebase or other Db
    timeStamp: '',
    mail: 'morriogimenez@gmail.com',
    activeOrders: [OrdersResponse[0]],
    ordersIds: [OrdersResponse[0]]
  }
];
