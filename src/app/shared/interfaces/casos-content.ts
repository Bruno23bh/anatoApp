/* eslint-disable @typescript-eslint/naming-convention */
export interface CasosContent {
    title: string;
    inputSearchBarPlaceholder: string; // Min: 3 - Max: 50
    messageSinRegistros: string;

    // Constants
    MIN_SEARCH_CHARACTERS: number;
    FILTER_CASOS_TODOS: string;
    FILTER_CASOS_DERIVADOS: string;
    FILTER_CASOS_DERIVADOS_ORGANIZACION: string;
}
