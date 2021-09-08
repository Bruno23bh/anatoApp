
export interface TareaContent {
    title: string;
    buttonGuardar: string;
    buttonEliminar: string;
    messageCamposRequeridos: string;
    form: {
        cardDatosDeLaTareaTitle: string;
        cardDatosDeLaTareaEstadoCompleta: string;
        cardDatosDeLaTareaEstadoPendiente: string;
        titulo: {
            input: string;
            validations: {
                type: string;
                message: string;
            }[];
        };
        descripcion: {
            placeholder: string;
            validations: {
                type: string;
                message: string;
            }[];
        };
        fecha: {
            input: string;
            validations: {
                type: string;
                message: string;
            }[];
        };
        asignadoA: {
            input: string;
            validations: {
                type: string;
                message: string;
            }[];
        };
    };
    messageSalirSinGuardar: string;
    messageEditadoConExito: string;
    messageGuardadoConExito: string;
    messageEliminadoConExito: string;
    alertEliminarTitle: string;
    alertEliminarSubTitle: string;
    alertEliminarButtonNo: string;
    alertEliminarButtonYes: string;
    notificacionTareaEliminadaTitle: string;
    notificacionTareaAsignadaTitle: string;
    notificacionTareaEliminadaBody: string;
    notificacionTareaAsignadaBody: string;
    notificacionTeHanAsignadoTareaTitle: string;
    notificacionEnviadaConExito: string;
}
