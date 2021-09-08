import { Notificacion } from './notificacion';

export interface Usuario {
  id: string;
  organizacionId: string;

  nombre: string;
  apellido: string;
  documentoTipo?: string;
  documentoNro?: number;
  fechaNacimiento?: string;
  sexo?: string;
  estadoCivil?: string;
  nacionalidad?: string;
  cuil?: string;
  email: string;
  telefono?: string;
  direccion?: string;
  piso?: string;
  departamento?: string;
  provincia?: string;
  localidad?: string;
  codigoPostal?: string;

  isAdmin: boolean;
  isActive: boolean;
  hasPaid: boolean;
  licence: string;

  colorTheme: string;
  allowNotifications: boolean;
  tokens: string[];

  notificaciones: Notificacion[];
}
