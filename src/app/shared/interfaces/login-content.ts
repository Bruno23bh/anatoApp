
export interface LoginContent {
    title: string;
    form: {
        email: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
        password: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
    };
    buttonPrimerIngreso: string;
    buttonOlvidasteContrasena: string;
    buttonIngresar: string;
    buttonRegistrarse: string;
    messageVerifiedEmailErrorLabel: string;
    messageVerifiedEmailFormatErrorLabel: string;
    messageSentEmailSuccessLabel: string;
    // Alert primer ingreso
    alertPrimerIngresoLabelTitle: string;
    alertPrimerIngresoLabelDescription: string;
    alertPrimerIngresoInputEmail: string;
    alertPrimerIngresoButtonCancelar: string;
    alertPrimerIngresoButtonSolicitar: string;
    // Alert olvidaste la contraseña
    alertOlvidasteLaContrsenaLabelTitle: string;
    alertOlvidasteLaContrsenaLabelDescription: string;
    alertOlividasteLaContrasenaInputEmail: string;
    alertOlividasteLaContrasenaButtonCancelar: string;
    alertOlividasteLaContrasenaButtonSolicitar: string;

    // Alerts account issues
    alertNoExisteUsuarioConEseEmail: string;
    alertEmailNoValidadoHeader: string;
    alertEmailNoValidadoMessage: string;
}
