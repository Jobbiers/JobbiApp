import { Orders } from "./Orders.interface";

export interface Professional {
    id: 0,
    name: string,
    lastName: string,
    photo: string, // Id bucketfile Firebase or other Db
    timeStamp: number,
    mail: string,
    ordersIds: Orders[],
    businessId: 0
  }