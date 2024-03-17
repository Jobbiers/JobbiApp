import { Professional } from "./Professional.interface";
import { Services } from "./Services.interface";
import { States } from "./States.interface";

export interface Orders {
  id: number;
  professionalId: Professional;
  userId: number;
  serviceId: Services;
  stateId: States;
}
