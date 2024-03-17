import { Professional } from './Professional.interface';
import { Services } from './Services.interface';

export interface Business {
  id: number;
  name: string;
  description: string;
  photoBusiness: string;
  openingHours: string[];
  professionalAssignedId: Professional;
  servicesId: Services[];
}
