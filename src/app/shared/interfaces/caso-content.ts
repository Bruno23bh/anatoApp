export interface CasoContent {
    title: string;
    tabs: {
        name: string;
        icon: string;
    }[];
    buttonGuardar: string;
    buttonEliminar: string;
    messageCamposRequeridos: string;
    stringAltaCasoMovimiento: string;
    messageArchivosGuardadoConExito: string;
    messageImposibilidadDerivarCaso: string;
    messageCasoDerivadoConExito: string;
    notificacionCasoDerivadoTitle: string;
    notificacionCasoDerivadoBody: string;
    notificacionEnviadaConExitoA: string;

    // Small Cards
    smallCardDiasSinMovimientosTitle: string;
    smallCardUltimoEstadoTitle: string;
    smallCardUltimoMovimientoTitle: string;

    // FORM
    form: {
        casoNoDerivadoText: string;
        casoDerivadoText: string;
        cardDatosDelCasoTitle: string;
        cardDatosDelCasoTiposDeCaso: string[];
        fechaComienzoCaso: {
            input: string;
            validations: {
                type: string;
                message: string;
            }[];
        };
        tipo: {
            input: string;
            validations:
            {
                type: string;
                message: string;
            }[];
        };
        enviadoPor: {
            input: string;
            validations:
            {
                type: string;
                message: string;
            }[];
        };
        derivadoA: {
            input: string;
            validations:
            {
                type: string;
                message: string;
            }[];
        };
        comentarios: {
            input: string;
            validations:
            {
                type: string;
                message: string;
            }[];
        };
        cardComentariosTitle: string;
    };
    // Derivar modal
    derivarModal: {
        title: string;
        cardTitle: string;
        cardSubtitle: string;
        msgNoEsUsuarioDeIuris: string;
        msgEnviarInvitacionIuris: string;
        form: {
            email: {
                input: string;
                validations: {
                    type: string;
                    message: string;
                }[];
            };
        };
        cancelarButton: string;
        derivarButton: string;
    };
    // Card comentarios
    cardTareasTitle: string;
    cardTareasMessageSinTareas: string;
    cardTareasLabelAddNewValidation: string;
    cardTareasPendienteLabel: string;
    cardTareasCompletadaLabel: string;
    // Mensajes y toasts
    messageSalirSinGuardar: string;
    messageEditadoConExito: string;
    messageGuardadoConExito: string;
    messageEliminadoConExito: string;
    alertEliminarTitle: string;
    alertEliminarSubTitle: string;
    alertEliminarButtonNo: string;
    alertEliminarButtonYes: string;
    messageDerivadoValidation: string;
    // Tab Movimientos
    cardTurnosTitle: string;
    cardTurnosMessageSinTurnos: string;
    cardTurnosLabelAddNewValidation: string;
    cardMovimientosSelectFilterLabel: string;
    cardMovimientosTitle: string;
    cardMovimientosSelectFilter: {
        label: string;
        value: string;
    }[];
    cardMovimientosSelectFilterCancelarLabel: string;
    cardMovimientosLabelAddNewValidation: string;
    // Tab Expedientes
    cardExpedientesTitle: string;
    cardExpedientesMessageSinExpedientes: string;
    cardExpedientesLabelAddNewValidation: string;
}
