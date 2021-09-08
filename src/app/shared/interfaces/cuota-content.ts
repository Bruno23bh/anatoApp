
export interface CuotaContent {
    title: string;
    buttonGuardar: string;
    buttonEliminar: string;
    messageCamposRequeridos: string;
    // Card Datos Personales
    form: {
        cardDatosCuotaTitle: string;
        monto: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        fechaPago: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        medioPago: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        // Card Otros datos
        cardOtrosDatosTitle: string;
        cardOtrosDatosLabelEstadoPaga: string;
        cardOtrosDatosLabelEstadoImpaga: string;
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
