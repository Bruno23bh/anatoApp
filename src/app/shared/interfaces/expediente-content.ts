
export interface ExpedienteContent {
    title: string;
    buttonGuardar: string;
    buttonEliminar: string;
    messageCamposRequeridos: string;
    addMovimientoReferencia: string;
    // Card Datos del Movimiento
    form: {
        cardDatosExpedienteTitle: string;
        numeroExpediente: {
            input: string;
            validations: {
                type: string;
                message: string;
            }[];
        };
        fechaInicio: {
            input: string;
            validations: {
                type: string;
                message: string;
            }[];
        };
    };
    cardDatosExpedienteInputNumero: string;
    cardDatosExpedienteLabelNumeroRequiredValidation: string;
    cardDatosExpedienteLabelEstado: string;
    cardDatosExpedienteEstados: string[];
    // Mensajes y toasts
    messageSalirSinGuardar: string;
    messageEditadoConExito: string;
    messageGuardadoConExito: string;
    messageEliminadoConExito: string;
    alertEliminarTitle: string;
    alertEliminarSubTitle: string;
    alertEliminarButtonNo: string;
    alertEliminarButtonYes: string;
}
