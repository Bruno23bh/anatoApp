import { Plan } from './plan';

export interface Licencia {
    id: string;
    organizacionId: string;
    activo: boolean;
    planes: Plan[];
}
