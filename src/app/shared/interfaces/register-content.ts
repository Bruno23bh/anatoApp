
export interface RegisterContent {
    title: string;
    buttonComprar: string;
    messageCamposRequeridos: string;
    cardDatosPlanTitle: string;
    cardDatosPlanSelectLabel: string;
    cardDatosPlanSelectValues: { plan: string; price: number }[];
    matchingPasswordsForm: {
        password: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        validations: [
            {
                type: string;
                message: string;
            }
        ];
        confirmPassword: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }]
            ;
        };
    };
    form: {
        cardDatosPersonalesTitle: string;
        cardDatosPersonalesSubTitle: string;
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
        email: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        cardDatosOrganizationTitle: string;
        organizacion: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        domicilio: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        cuit: {
            input: number;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        telefonoContacto: {
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
    messageCompradoConExito: string;
}
