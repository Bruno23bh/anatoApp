import { FileToUpLoad } from 'src/app/shared/interfaces/file-to-upload';

import { Dependencia } from './dependencia';
import { Licencia } from './licencia';
import { Usuario } from './usuario';


export interface Organizacion {
    id: string;//
    nombre: string;//
    domicilio: string;//
    nombreApellidoResponsable: string;//
    emailContacto: string;//
    telefonoContacto: string;//
    cuit: string;//
    usuarios: Usuario[];//
    licencia: Licencia;//
    normativas: FileToUpLoad[];//
    formularios: FileToUpLoad[];//
    privados: FileToUpLoad[];//
    dependencias: Dependencia[];//
    alias?: string; //
    remainingStorage: number;
    consumedStorage: number;
    extraStorage: number;
    availableUsers: number;
}
