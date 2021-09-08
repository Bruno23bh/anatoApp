
export interface ClienteContent {
    title: string;
    // ----- Tab Datos -----
    tabs: {
        name: string;
        icon: string;
    }[];
    buttonGuardar: string;
    buttonEliminar: string;
    messageCamposRequeridos: string;
    form: {
        cardDatosPersonalesTitle: string;
        nombre: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        apellido: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        documentoNro: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        documentoTipo: {
            input: string;
            values: string[];
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        cuil: {
            input: number;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        fechaNacimiento: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        cardDatosPersonalesLabelEdad: string;
        nacionalidad: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        estadoCivil: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
            values: string[];
        };
        sexo: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
            values: string[];
        };
        cardDatosDeContactoTitle: string;
        direccion: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        piso: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        departamento: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        provincia: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        localidad: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        codigoPostal: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        email: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        telefono: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        cardOtrosDatosTitle: string;
        claveFiscal: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        claveSeguridadSocial: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
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
    // ----- Tab Casos -----
    cardResumenDeCasosTitle: string;
    cardResumenDeCasosMessageSinCasos: string;
    // ----- Tab Pagos -----
    cardResumenDePagosTitle: string;
    cardResumenDePagosMessageSinPagos: string;
}
