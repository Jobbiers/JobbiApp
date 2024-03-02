import { Professional } from "./Professional.interface";
import { Services } from "./Services.interface";
import { States } from "./States.interface";

export interface Orders {
  id: number;
  professionalId: Professional;
  userId: 0;
  serviceId: Services;
  stateId: States;
}
