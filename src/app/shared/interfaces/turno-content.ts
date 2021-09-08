
export interface TurnoContent {
    title: string;
    buttonGuardar: string;
    buttonEliminar: string;
    messageCamposRequeridos: string;
    labelDireccionDependencia: string;
    form: {
        // Card Datos del turno
        cardDatosDelTurnoTitle: string;
        cardDatosDelAnadirCalendarioLabel: string;
        direccion: {
            input: string;
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
        hora: {
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
    // Mensajes y toasts
    messageSalirSinGuardar: string;
    messageEditadoConExito: string;
    messageGuardadoConExito: string;
    messageEliminadoConExito: string;
    alertEliminarTitle: string;
    alertEliminarSubTitle: string;
    alertEliminarButtonNo: string;
    alertEliminarButtonYes: string;
    notificacionTurnoEliminadoTitle: string;
    notificacionTurnoAsignadoTitle: string;
    notificacionTurnoEliminadoBody: string;
    notificacionTeHanAsignadoTurno: string;
    notificacionEnviadaConExito: string;
    referenciaMovimientoAutomaticoNuevoTurno: string;
    shareTurnoDialogTitle: string;
    shareTurnoTitle: string;
    shareTurnoTextTieneTurnoEn: string;
    shareTurnoTextFecha: string;
    shareTurnoTextRecordatorio: string;
}
