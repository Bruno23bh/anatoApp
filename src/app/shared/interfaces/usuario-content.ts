export interface UsuarioContent {
    title: string;
    tabsDatos: string[];
    buttonGuardar: string;
    messageCamposRequeridos: string;
    // Card Datos Personales
    cardDatosPersonalesTitle: string;
    cardDatosPersonalesInputNombre: string; // Required (Max 50), No tiene que permitir numeros
    cardDatoPersonalesLabelNombreRequiredValidation: string;
    cardDatosPersonalesInputApellido: string; // Required (Max 50), No tiene que permitir numeros
    cardDatoPersonalesLabelApellidoRequiredValidation: string;
    cardDatosPersonalesInputNumeroDeDocumento: string; // Only number (Max 20)
    cardDatosPersonalesLabelTipoDeDocumento: string;
    cardDatosPersonalesSelectTipoDeDocumento: string[];
    cardDatosPersonalesInputCuil: string; // Only number, max 20
    cardDatosPersonalesInputFechaDeNacimiento: string; // Date, from: today to: today - 200 años,
    cardDatosPeronalesLabelFechaDeNacimientoFormatValidation: string;
    cardDatosPersonalesLabelEdad: string;
    cardDatosPersonalesInputNacionalidad: string; // (Max 50), No tiene que permitir numeros
    cardDatosPersonalesLabelEstadoCivil: string;
    cardDatosPersonalesSelectEstadoCivil: string[];
    cardDatosPersonalesLabelSexo: string;
    cardDatosPersonalesSelectSexo: string[];
    // Card Datos de contacto
    cardDatosDeContactoTitle: string;
    cardDatosDeContactoInputDireccion: string; //  (Max 150)
    cardDatosDeContactoInputPiso: string; // Only number (Max 5)
    cardDatosDeContactoInputDepartamento: string; //  (Max 50)
    cardDatosDeContactoInputProvincia: string; //  (Max 100)
    cardDatosDeContactoInputLocalidad: string; //  (Max 100)
    cardDatosDeContactoInputCodigoPostal: string; //  (Max 20)
    cardDatosDeContactoInputCorreoElectronico: string; // Required y valido (exp) (Max 150)
    cardDatoDeContactoLabelCorreoElectronicoRequiredValidation: string;
    cardDatosDeContactoInputTelefono: string; // Only number (Max 50)
    // Mensajes y toasts
    messageSalirSinGuardar: string;
    messageEditadoConExito: string;

}
