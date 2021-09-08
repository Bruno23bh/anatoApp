import { Dependencia } from 'src/app/core/interfaces/dependencia';


export interface SelectDependenciasContent {
    title: string;
    selectLabel: string;
    dependencias: Dependencia[];
}
