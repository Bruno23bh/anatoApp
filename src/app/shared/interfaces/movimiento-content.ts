
export interface MovimientoContent {
    title: string;
    buttonGuardar: string;
    buttonEliminar: string;
    messageCamposRequeridos: string;
    // Card Datos del Movimiento
    form: {
        cardDatosDelMovimientoTitle: string;
        referencia: {
            input: string;
            validations:
            {
                type: string;
                message: string;
            }[];
        };
        fechaDetalle: {
            input: string;
            validations:
            {
                type: string;
                message: string;
            }[];
        };
        descripcion: {
            input: string;
            validations:
            {
                type: string;
                message: string;
            }[];
        };
    };
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
