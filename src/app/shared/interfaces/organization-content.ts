
export interface OrganizationContent {
    title: string;
    tabs: {
        name: string;
        icon: string;
    }[];
    buttonGuardar: string;
    buttonEliminar: string;
    messageCamposRequeridos: string;

    shareDetailsTitle: string;
    shareDetailsTelefono: string;
    shareDetailsEmail: string;
    shareDetailsAliasBancario: string;

    form: {
        cardDatosDeLaOrganizacionTitle: string;
        nombre: {
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
        nombreApellidoResponsable: {
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
        emailContacto: {
            input: string;
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
        alias: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
    };
    cardDependenciasPersonalizadasTitle: string;
    messageSinDependencias: string;
    // Card usuarios
    cardUsuariosTitle: string;
    cardUsuariosInfoMessage: string;
    cardUsuariosSinUsuarios: string;

    // Mensajes y toasts
    messageSalirSinGuardar: string;
    messageEditadoConExito: string;
    messageGuardadoConExito: string;
    messageEliminadoConExito: string;

    // Alert eliminar
    alertEliminarDependenciaTitle: string;
    alertEliminarDependenciaSubTitle: string;

    alertEliminarSubTitle: string;
    alertEliminarButtonNo: string;
    alertEliminarButtonYes: string;

    // Alert añadir usuario
    alertAnadirUsuarioTitle: string;
    alertAnadirUsuarioSubTitle: string;
    alertAnadirUsuarioButtonNo: string;
    alertAnadirUsuarioButtonYes: string;
    alertAnadirUsuarioUserValidation: string;
    alertAnadirUsuarioEmailValidation: string;
    alertAnadirUsuarioNombrePlaceholder: string;
    alertAnadirUsuarioApellidoPlaceholder: string;
    alertAnadirUsuarioEmailPlaceholder: string;

    // Alert modificar usuario
    alertShowUserPermitsTitle: string;
    alertShowUserPermitsSubTitle: string;
    alertShowUserPermitsButtonNo: string;
    alertShowUserPermitsButtonYes: string;
    alertShowUserPermitsLabelAdministrador: string;
    alertShowUserPermitsLabelActivo: string;

    // Alert remove from organiation
    alertRemoveUserTitle: string;
    alertRemoveUserSubTitle: string;
    alertRemoveUserButtonYes: string;
    alertRemoveUserButtonNo: string;
    alertRemoveUserEmailValidation: string;

    // ----- Tab Casos -----
    cardResumenDeCasosTitle: string;
    cardResumenDeCasosMessageSinCasos: string;
    // ----- Tab Pagos -----
    cardResumenDePagosTitle: string;
    cardResumenDePagosMessageSinPagos: string;

    // Alert eliminar Organizacion
    alertEliminarOrganizacionTitle: string;
    alertEliminarOrganizacionCardTitle: string;
    alertEliminarOrganizacionCardSubTitle: string;
    alertEliminarOrganizacionCancelarButton: string;
    alertEliminarOrganizacionEliminarButton: string;
    alertEliminarOrganizacionNoCoincideNombre: string;
    alertEliminarOrganizacionForm: {
        organization: {
            input: string;
            validations: [
                {
                    type: string;
                    message: string;
                }
            ];
        };
    };
    alertCustomDependenciaForm: {
        alertCustomDependenciaTitle: string;
        alertCustomDependenciaCardTitle: string;
        alertCustomDependenciaCardSubTitle: string;
        alertCustomDependenciaCancelarButton: string;
        alertCustomDependenciaEliminarButton: string;
        organismo: {
            input: string;
            validations: {
                type: string;
                message: string;
            }[];
        };
        direccion: {
            input: string;
            validations: {
                type: string;
                message: string;
            }[];
        };
        nombre: {
            input: string;
            validations: {
                type: string;
                message: string;
            }[];
        };
    };
    planesRenovarButton: string;
    planesInfoMessage: string;


    alertOrganizacionEliminadaTitle: string;
    alertOrganizacionEliminadaMessage: string;


    // TAB PLANES
    cardPlanesTitle: string;
}
