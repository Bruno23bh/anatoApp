export interface PagoContent {
    title: string;
    tabs: {
        name: string;
        icon: string;
    }[];
    buttonGuardar: string;
    buttonEliminar: string;
    messageCamposRequeridos: string;
    // Card Datos Personales
    form: {
        cardDatosDelPagoTitle: string;
        total: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        honorarioAcordado: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        concepto: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        notas: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        fechaComunicadoAlCliente: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
    };

    // Cuotas
    cardCuotasTitle: string;
    cardCuotasValidMessage: string;
    cardCuotasMessageSinCuotas: string;
    cardCuotasLabelAddNewValidation: string;
    cardCuotasItem: string;
    cardCuotasItemPagaLabel: string;
    cardCuotasItemPagaElLabel: string;
    cardCuotasItemImpagaLabel: string;
    cardCuotasItemImpagaElLabel: string;
    // Mensajes y toasts
    messageSalirSinGuardar: string;
    messageEditadoConExito: string;
    messageGuardadoConExito: string;
    messageEliminadoConExito: string;
    alertEliminarTitle: string;
    alertEliminarSubTitle: string;
    alertEliminarButtonNo: string;
    alertEliminarButtonYes: string;

    abonoModal: {
        title: string;
        cardSubtitle: string;
        form: {
            fechaPrimerCuota: {
                input: string;
                validations: {
                    type: string;
                    message: string;
                }[];
            };
            cantidadCuotas: {
                input: string;
                validations: {
                    type: string;
                    message: string;
                }[];
            };
        };
        cancelarButton: string;
        cuotasButton: string;
    };
}
