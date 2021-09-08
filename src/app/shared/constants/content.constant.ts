/* eslint-disable @typescript-eslint/naming-convention */
export const content: any = {
  goodbye: JSON.stringify({
    toolbarTitle: 'Adios...',
    primaryMessage: 'Estamos tristes de verte partir',
    secondaryMessage: 'Puedes volver a contratar el servicio en cualquier momento!',
    btnIniciarSesion: 'Iniciar sesión'
  }),
  general: JSON.stringify({
    alertSinConexionLabelTitle: 'Sin conexion',
    alertSinConexionLabelSubTitle: 'Por favor verfica que tengas conexion a internet.',
    alertSinConexionLabelDescription: 'Sin conexion a internet la app no puede funcionar (por el momento...)',
    alertNotificacionesDesactivadas: 'El servicio de notificationes se encuentra deshabilitado o no está disponible para su dispositivo. Por favor, verifique que el dispositivo tenga los permisos correspondientes y que sea compatible.',
    camposRequeridos: 'Campos requeridos',
    campoRequerido: 'Campo requerido',
    tabCasos: 'Casos',
    tabPagos: 'Pagos',
    tabClientes: 'Clientes',
    tabHome: 'Inicio',
    terminosYcondicionesTitle: 'Términos y Condiciones',
    terminosYcondicionesTexto: 'Términos y Condiciones - UT SIMPLEX - CLÁUSULA PRIMERA: GENERAL Los siguientes términos y condiciones (en adelante, “Términos y Condiciones”) corresponden al  Servicio (definido más adelante) prestado por UT SIMPLEX a sus Usuarios (definidos más adelante).  Al utilizar cualquier servicio actual o futuro de UT SIMPLEX se estará sujeto a los lineamientos y  condiciones aplicables a tal Servicio o negocio.'

  }),
  faq: JSON.stringify({
    title: 'Ayuda',
    helpListHeaderInstalacion: 'Instalación',
    helpListInstalacionItems: [
      {
        title: 'En desktop (PC)',
        expand: 'false',
        icon: 'desktop-outline',
        description: '<p>En chrome, dirigite a <a href=\'https:iuris.utsimplex.com\'>https:iuris.utsimplex.com</a> y veras un icono para instalar la app al final de la barra de navegacion</p> <p>Luego se abrira un cuadro con un boton que te permitira instalar la aplicacion</p> <p>Finalmente podras acceder a la iuris como a cualquier otra aplicacion</p>',
        firstImagePath: './assets/images/add-to-desktop.png'
      },
      {
        title: 'En android',
        expand: 'false',
        icon: 'logo-android',

        description: '<p>En chrome, dirigite a <a href=\'https:iuris.utsimplex.com\'>https:iuris.utsimplex.com</a> y veras un banner en la parte inferior de la pantalla para instalar la app</p> <p>Luego se abrira un dialogo que te permitira instalar la aplicacion</p> <p>Finalmente podras acceder a la iuris como a cualquier otra aplicacion</p>',
        firstImagePath: './assets/images/add-to-android-1.jpeg',
        secondImagePath: './assets/images/add-to-android-2.jpeg'
      },
      {
        title: 'En iOS',
        expand: 'false',
        icon: 'logo-apple',

        description: '<p>Es safari, dirigite a <a href=\'https:iuris.utsimplex.com\'>https:iuris.utsimplex.com</a> haz click en el boton \'compartir\' en las opciones del navegador.</p> <p>Luego se abrira una ventana con un boton que te permitira agregar la app al inicio</p> <p>Finalmente podras acceder a la iuris como a cualquier otra aplicacion</p>',
        firstImagePath: './assets/images/add-to-ios-1.jpeg',
        secondImagePath: './assets/images/add-to-ios-2.jpeg'
      }
    ]
  }),
  selectClienteComponent: JSON.stringify({
    title: 'Clientes',
    selectLabel: 'Seleccione un cliente'
  }),
  thanks: JSON.stringify({
    title: 'Iuris',
    thanksLabel: 'Muchas gracias por confiar en nosotros',
    infoLabel: 'Enviamos un correo a la direccion de registro con un link de activacion. Por favor para active la cuenta y vuelva a iniciar sesion.',
    iniciarSesionButton: 'Iniciar sesión'
  }),
  notAllow: JSON.stringify({
    title: 'Pagina no habilitada'
  }),
  notFound: JSON.stringify({
    title: 'Pagina no encontrada',
    notFoundMessage: 'notFoundMessage'
  }),
  register: JSON.stringify({
    title: 'Registrarse',
    buttonComprar: 'Registrarse',
    cardDatosPlanTitle: 'Plan',
    cardDatosPlanSelectLabel: 'Seleccionar plan',
    cardDatosPlanSelectValues: [
      {
        plan: 'liber',
        price: 0
      }
    ],
    messageCamposRequeridos: 'Campos requeridos',
    matchingPasswordsForm: {
      password: {
        input: 'Contraseña',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'minlength',
            message: 'La contraseña debe tener al menos 5 caracteres'
          },
          {
            type: 'pattern',
            message: 'La contraseña debe tener al menos una letra mayuscula, una letra minuscula y un numero.'
          }
        ]
      },
      validations: [
        {
          type: 'areEqual',
          message: 'Las contrasañas no son iguales.'
        }
      ],
      confirmPassword: {
        input: 'Confirmar contraseña',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'minlength',
            message: 'La contraseña debe tener al menos 5 caracteres'
          },
          {
            type: 'pattern',
            message: 'La contraseña debe tener al menos una letra mayuscula, una letra minuscula y un numero.'
          }
        ]
      }
    },
    form: {
      cardDatosPersonalesTitle: 'Datos del usuario',

      cardDatosPersonalesSubTitle: 'Estos datos son los datos personales del adminisrador o dueño del estudio. Es la perona que va a tener los privilegios para administrar a los demas usuarios del estudio, renovar las licencias o confirmar acciones determinantes para el negocio.',
      nombre: {
        input: 'Nombre',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      apellido: {
        input: 'Apellido',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      email: {
        input: 'Correo electrónico test',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'pattern',
            message: 'Formato incorrecto. Ejemplo: nombre@email.com'
          }
        ]
      },
      cardDatosOrganizationTitle: 'Datos de la organizacion',
      organizacion: {
        input: 'Organización',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      domicilio: {
        input: 'Domicilio',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      nombreApellidoResponsable: {
        input: 'Responsable',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      alias: {
        input: 'Alias',
        validations: [
          {
            type: 'minlength',
            message: 'Mínimo 5 caracteres.'
          },
          {
            type: 'maxlength',
            message: 'Máximo 100 caracteres.'
          }
        ]
      },
      emailContacto: {
        input: 'Correo electrónico',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'pattern',
            message: 'Formato incorrecto. Ejemplo: nombre@email.com'
          }
        ]
      },
      telefonoContacto: {
        input: 'Teléfono',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      cuit: {
        input: 'Cuil',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      }
    },
    messageSalirSinGuardar: '¿Está seguro que desea salir sin guardar los cambios?',
    messageCompradoConExito: 'Cuenta creada con exito'
  }),
  user: JSON.stringify({
    title: 'Usuario',
    tabs: [
      {
        name: 'Datos',
        icon: 'information-outline'
      }
    ],
    buttonGuardar: 'Guardar',
    messageCamposRequeridos: 'Campos requeridos',
    form: {
      cardDatosPersonalesTitle: 'Datos personales',
      nombre: {
        input: 'Nombre',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      apellido: {
        input: 'Apellido',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      documentoNro: {
        input: 'Número de documento',
        validations: [
          {
            type: 'min',
            message: 'Minimo 100000'
          },
          {
            type: 'max',
            message: 'Maximo 100000000'
          },
          {
            type: 'pattern',
            message: 'Formato incorrecto.'
          }
        ]
      },
      documentoTipo: {
        input: 'Tipo de documento',
        values: [
          'DU',
          'LE',
          'LC',
          'LM',
          'LF',
          'CI',
          'Pasaporte'
        ]
      },
      cuil: {
        input: 'Cuil'
      },
      fechaNacimiento: {
        input: 'Fecha de nacimiento',
        validations: [
          {
            type: 'pattern',
            message: 'Formato incorrecto. Ejemplo: 12/12/2020'
          }
        ]
      },
      cardDatosPersonalesLabelEdad: 'Edad',
      nacionalidad: {
        input: 'Nacionalidad',
        validations: [
          {
            type: 'minlength',
            message: 'Mínimo 5 caracteres.'
          },
          {
            type: 'maxlength',
            message: 'Máximo 40 caracteres.'
          }]
      },
      estadoCivil: {
        input: 'Estado civil',
        values: [
          'Soltero',
          'Casado',
          'Viudo',
          'Divorciado',
          'Separado de hecho',
          'SIN INFORMAR'
        ]
      },
      sexo: {
        input: 'Sexo',
        values: [
          'Masculino',
          'Femenino'
        ]
      },
      cardDatosDeContactoTitle: 'Datos de contacto',
      direccion: {
        input: 'Dirección'
      },
      piso: {
        input: 'Piso'
      },
      departamento: {
        input: 'Departamento'
      },
      provincia: {
        input: 'Provincia'
      },
      localidad: {
        input: 'Localidad'
      },
      codigoPostal: {
        input: 'Código postal'
      },
      email: {
        input: 'Correo electrónico',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'pattern',
            message: 'Formato incorrecto. Ejemplo: nombre@email.com'
          }
        ]
      },
      telefono: {
        input: ' Teléfono'
      }
    },
    messageSalirSinGuardar: '¿Está seguro que desea salir sin guardar los cambios?',
    messageEditadoConExito: 'Cambios guardado con éxito.'
  }),
  selectDependenciaComponent: JSON.stringify({
    title: 'Dependencias',
    selectLabel: 'Seleccione una dependencia',
    dependencias: [
      {
        organismo: 'ANSES',
        nombre: 'Rosario',
        auto: true,
        direccion: 'Brown 2262'
      },
      {
        organismo: 'ANSES',
        nombre: 'Maternidad Santa Rosa',
        direccion: 'Mariano Jose Haedo 4150'
      },
      {
        organismo: 'ANSES',
        nombre: 'UDAI Barracas',
        direccion: 'Av. Regimiento de Patricios 939'
      },
      {
        organismo: 'ANSES',
        nombre: 'UDAI Centro',
        direccion: 'Av. Cordoba 1118'
      },
      {
        nombre: 'UDAI Convenios Internacionales',
        direccion: 'Presidente J. D. Perón 336',
        organismo: 'ANSES'
      },
      {
        nombre: 'UDAI Floresta II',
        direccion: 'Av. Segurola 1129 / 33',
        organismo: 'ANSES'
      },
      {
        nombre: 'UDAI Monserrat',
        direccion: 'Mexico 270',
        organismo: 'ANSES'
      },
      {
        organismo: 'ANSES',
        nombre: 'UDAI Pacifico',
        direccion: 'Av. Santa Fe 5140'
      },
      {
        organismo: 'ANSES',
        nombre: 'UDAI Plaza de Mayo',
        direccion: 'Paseo Colon 239'
      },
      {
        organismo: 'ANSES',
        nombre: 'UDAI Rosario',
        direccion: 'Rioja 1120'
      },
      {
        organismo: 'ANSES',
        nombre: 'UDAI Rosario IV',
        direccion: 'Mendoza 948'
      },
      {
        organismo: 'ANSES',
        nombre: 'UDAI Rosario Norte',
        direccion: 'Av. Alberdi 651'
      },
      {
        organismo: 'ANSES',
        nombre: 'UDAI Rosario Oeste',
        direccion: 'Av. Provincias Unidas 571'
      },
      {
        organismo: 'ANSES',
        nombre: 'UDAI Villa Urquiza',
        direccion: 'Av. Alvarez Thomas 2356'
      }
    ]
  }),
  tarea: JSON.stringify({
    title: 'Tarea',
    buttonGuardar: 'Guardar',
    buttonEliminar: 'Eliminar',
    messageCamposRequeridos: 'Campos requeridos',
    form: {
      cardDatosDeLaTareaTitle: 'Descripción',
      cardDatosDeLaTareaEstadoCompleta: 'Completada',
      cardDatosDeLaTareaEstadoPendiente: 'Pendiente',
      titulo: {
        input: 'Titulo',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'minlength',
            message: 'Minimo 5 caracteres.'
          },
          {
            type: 'maxlength',
            message: 'Maximo 50 caracteres.'
          }
        ]
      },
      descripcion: {
        placeholder: 'Ingrese aquí la descripción de la tarea...',
        validations: [
          {
            type: 'minlength',
            message: 'Minimo 5 caracteres.'
          },
          {
            type: 'maxlength',
            message: 'Maximo 3000 caracteres.'
          }
        ]
      },
      fecha: {
        input: 'Fecha de referencia',
        validations: [
          {
            type: 'pattern',
            message: 'Formato incorrecto'
          }
        ]
      },
      asignadoA: {
        input: 'Asignado a',
        validations: [
          {
            type: 'minlength',
            message: 'Minimo 5 caracteres.'
          },
          {
            type: 'maxlength',
            message: 'Maximo 3000 caracteres.'
          }
        ]
      }
    },
    messageSalirSinGuardar: '¿Está seguro que desea salir sin guardar los cambios?',
    messageEditadoConExito: 'Tarea guardada con éxito.',
    messageGuardadoConExito: 'Nueva tarea guardado con éxito.',
    messageEliminadoConExito: 'Tarea eliminada con éxito.',
    alertEliminarTitle: 'Atención',
    alertEliminarSubTitle: '¿Está seguro que desea eliminar la tarea?',
    alertEliminarButtonNo: 'No',
    alertEliminarButtonYes: 'Si',
    notificacionTareaEliminadaTitle: 'Tarea eliminada',
    notificacionTareaAsignadaTitle: 'Tarea asignada',
    notificacionTareaEliminadaBody: 'Se eliminó la tarea',
    notificacionTareaAsignadaBody: 'Descripción:',
    notificacionTeHanAsignadoTareaTitle: 'Te han asignado la tarea',
    notificacionEnviadaConExito: 'Notificación enviada a'
  }),
  selectEntitiesModal: JSON.stringify({
    title: 'Seleccionar',
    inputSearchBarPlaceholder: 'Buscar',
    messageSinRegistros: 'No se han encontrado resultados que coincidan con los parámetros de búsqueda ingresados.'
  }),
  uploadFiles: JSON.stringify({
    cardTypeTitle: 'Archivos',
    cardTypeMessageGuardarAntesDeCargar: 'Antes de cargar un archivo debe guardar.',
    pageTypeTitle: 'Buscador',
    pageTypeSearchBarPlaceHolder: 'Ingrese nombre del archivo que deseas buscar',
    pageTypeFileTypes: [
      'PDF',
      'XLS',
      'IMG',
      'DOC'
    ],
    messageArchivosAceptados: 'Archivos aceptados: PDFs, imagenes (jpeg, jpg) y documentos de office (word & excel). Tamaño máximo: 128MB.',
    messageSubiendoArchivo: 'Subiendo archivo... aguarde un instante'
  }),
  recursos: JSON.stringify({
    title: 'Recursos',
    card1NormativasTitle: 'Normativas',
    card1NormativasDescription: 'Doctrina, Legislación, Jurisprudencia y otros.',
    card2FormulariosTitle: 'Formularios',
    card2FormulariosDescription: 'Carpeta de formularios',
    card3PrivadosTitle: 'Privados',
    card3PrivadosDescription: 'Aquí solo acceden los usuarios Admin',
    normativasTitle: 'Normativas',
    formulariosTitle: 'Formularios',
    privadosTitle: 'Privados',

    messageSinArchivos: 'No hay archivos! Sube aquí los documentos que utilizas con mayor frecuencia. Recuerda que todo el personal de tu organización tiene acceso a estos archivos.',

    messageSinArchivosPrivados: 'No hay archivos! Sube aquí los documentos que utilizas con mayor frecuencia. Recuerda que solo los usuarios Admin de tu organización tienen acceso a estos archivos.'
  }),
  expediente: JSON.stringify({
    title: 'Expediente',
    buttonGuardar: 'Guardar',
    buttonEliminar: 'Eliminar',
    messageCamposRequeridos: 'Campos requeridos',
    addMovimientoReferencia: 'Nuevo expediente en',
    form: {
      cardDatosExpedienteTitle: 'Datos del expediente',
      numeroExpediente: {
        input: 'Número de expediente',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      fechaInciipo: {
        input: 'Fecha de inicio',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'pattern',
            message: 'La contraseña debe tener al menos una letra mayuscula, una letra minuscula y un numero.',
          }
        ]
      },
      estado: {
        input: 'Estado'
      }
    },
    cardDatosExpedienteInputNumero: 'Número de expediente',
    cardDatosExpedienteLabelNumeroRequiredValidation: 'Campo requerido',
    cardDatosExpedienteLabelEstado: 'Estado',
    cardDatosExpedienteEstados: [
      '1- En Trámite',
      '2- En Espera de Documentación',
      '3- En Reserva',
      '4- Acordado',
      '5- Denegado',
      '6- En espera de Examen Médico',
      '7- Citación',
      '8- Verificación',
      '9- Resuelto',
      '10- A conocimiento de Superioridad',
      '11- Ingresado por liquidación ley 24241',
      '12- Reservado Destrucción de Expedientes',
      '13- Cumplimiento Parcial',
      '14- Iniciación',
      '15- Para Cómputos y Liquidación',
      '16- Citados para Pagos con Presencia',
      '17- Análisis de Especialista',
      '18- En espera de Normativa',
      '19- En espera de Anexo II ( Verificación)',
      '20- Para verificar en Jurisdicción Propia',
      '21- Para verificar en Jurisdicción Externa',
      '22- Espera de Expediente de Archivo de Otra Area',
      '23- Espera de Expediente de Archivo Central',
      '24- Espera Resp. Interp. Legal Nivel Central',
      '25- Espera de ser citado para agregar documentación',
      '26- Espera de Documentación. Solicita a UCA.',
      '27- Espera de Situación de Revista Nivel Central',
      '29- Para Oficios Judiciales',
      '30- Espera de Doc. Solicitada a DGI',
      '31- Espera Financiamiento Capitalización',
      '32- Espera Calculo Actuarial Capitalización',
      '33- Espera Informe de Otro País',
      '34- Pedido de Verificación. Sect. Admin. Udai',
      '35- Devolución Falta Antecedentes Mínimo',
      '36- Verificación Gerencia. Coord. Fiscalización',
      '37- Verificación Descargada por verificación',
      '38- UCA- Reintegros a seleccionar',
      '39- Verificaciones Reintegros Seleccionados',
      '40- Resuelto Favorablemente',
      '41- Resuelto Desfavorablemente',
      '42- Pre-acordado',
      '43- Expediente Recaratulado',
      '44- Rectificación Ingreso Viaje',
      '45- Rectificación Financiamiento',
      '46- Acordado Manual',
      '47- Espera cese Actividad Tut. O Curat.',
      '48- Acordado Manual Espera Sal. Familiar',
      '49- En espera de Documentación de AFJP',
      '50- Trámite Inactivo',
      '51- Impugnado',
      '52- Análisis/ Liquidación Asignación Fliar',
      '53- Contestación de Demanda',
      '54- Medida de no innovar decretada',
      '55- Cuestión de Puro Derecho Declarada',
      '56- Cuestión de Puro Derecho Revocada',
      '57- Sentencia Cumplida',
      '58- Etapa Probatoria',
      '59- Recurso Extraordinario',
      '60- Rechazo Acción de Amparo',
      '61- Rechazar Demanda',
      '62- Sentencia a Favor',
      '63- Sentencia Definitiva',
      '64- Sentencia Desfavorable',
      '65- Sentencia Apelada',
      '66- Sentencia Interlocutoria',
      '67- A Liquidación',
      '68- Sentencia Primera Instancia',
      '69- Traslado Expresión de Agravios',
      '70- Traslado de Demanda',
      '71- Traslado Memorial',
      '72- Causa Pre-paralizada',
      '73- Autos para alegar',
      '74- Autos para Sentencia',
      '75- Clausura Etapa Prueba',
      '76- Sentencia Cámara',
      '77- Desestimado Recurso Extraordinario',
      '78- En Cámara',
      '79- En Corte',
      '80- Fallecimiento del Titular',
      '81- Ejecución/ Intima Cumplimiento- Contestada',
      '82- Remitido a Dictaminar',
      '83- Desestimación del Titular',
      '84- En Análisis por AFJP',
      '85- Causa Espera Liquidación',
      '86- Ejecución con Liquidación Aprobada',
      '87- Ejecución con Sentencia 1era Instancia',
      '88- Ejecución con Sentencia de Cámara',
      '89- Ejecución con Sentencia de Corte',
      '90- Determinación de Derecho',
      '91- Acuerdo Cancelado',
      '92- Probatoria Manual',
      '93- Estado Terminal Anterior Erróneo',
      '94- Acordado Condicionado Res 884/06',
      '95- Causa Paralizada',
      '96- A Resolver por Jurisdicción Externa',
      '97- Rebeldía Declarada',
      '98- Sentencia de Corte',
      '99- Nulidad Procesal Declarada'
    ],
    messageSalirSinGuardar: '¿Está seguro que desea salir sin guardar los cambios?',
    messageEditadoConExito: 'Expediente guardado con éxito.',
    messageGuardadoConExito: 'Nuevo Expediente guardado con éxito.',
    messageEliminadoConExito: 'Expediente eliminado con éxito.',
    alertEliminarTitle: 'Atención',
    alertEliminarSubTitle: '¿Está seguro que desea eliminar el expediente?',
    alertEliminarButtonNo: 'No',
    alertEliminarButtonYes: 'Si'
  }),
  movimiento: JSON.stringify({
    title: 'Movimiento',
    buttonGuardar: 'Guardar',
    buttonEliminar: 'Eliminar',
    messageCamposRequeridos: 'Campos requeridos',
    form: {
      cardDatosDelMovimientoTitle: 'Datos del movimiento',
      referencia: {
        input: 'Referencia',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      fechaDetalle: {
        input: 'Fecha del movimiento',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'pattern',
            message: 'Formato incorrecto'
          }
        ]
      },
      descripcion: {
        input: 'Descripcion'
      }
    },
    messageSalirSinGuardar: '¿Está seguro que desea salir sin guardar los cambios?',
    messageEditadoConExito: 'Movimiento guardado con éxito.',
    messageGuardadoConExito: 'Nuevo Movimiento guardado con éxito.',
    messageEliminadoConExito: 'Movimiento eliminado con éxito.',
    alertEliminarTitle: 'Atención',
    alertEliminarSubTitle: '¿Está seguro que desea eliminar el movimiento?',
    alertEliminarButtonNo: 'No',
    alertEliminarButtonYes: 'Si'
  }),
  turno: JSON.stringify({
    title: 'Turno',
    buttonGuardar: 'Guardar',
    buttonEliminar: 'Eliminar',
    messageCamposRequeridos: 'Campos requeridos',
    labelDireccionDependencia: 'Dirección',
    form: {
      cardDatosDelTurnoTitle: 'Datos del turno',
      cardDatosDelAnadirCalendarioLabel: 'Añadir al calendario', a: {
        input: 'Fecha del turno',
        validations: [
          {
            type: 'pattern',
            message: 'Formato incorrecto'
          }
        ]
      },
      hora: {
        input: 'Hora del turno',
        validations: [
          {
            type: 'pattern',
            message: 'Formato incorrecto'
          }
        ]
      },
      asignadoA: {
        input: 'Asignado a',
        validations: [
          {
            type: 'pattern',
            message: 'Formato incorrecto'
          }
        ]
      }
    },
    alertEliminarTitle: 'Atención',
    alertEliminarSubTitle: '¿Está seguro que desea eliminar el turno?',
    alertEliminarButtonNo: 'No',
    alertEliminarButtonYes: 'Si',
    messageSalirSinGuardar: '¿Está seguro que desea salir sin guardar los cambios?',
    messageEditadoConExito: 'Cambios guardado con éxito.',
    messageGuardadoConExito: 'Nuevo Turno guardado con éxito.',
    messageEliminadoConExito: 'Turno eliminado con éxito.',
    notificacionTurnoEliminadoTitle: 'Turno eliminado',
    notificacionTurnoAsignadoTitle: 'Nuevo turno asignado en',
    notificacionTurnoEliminadoBody: 'Se eliminó el turno',
    notificacionTeHanAsignadoTurno: 'Te han asignado el turno en',
    notificacionEnviadaConExito: 'Notificación enviada a',
    referenciaMovimientoAutomaticoNuevoTurno: 'Nuevo turno en',
    shareTurnoDialogTitle: 'Compartir turno',
    shareTurnoTitle: 'Turno en',
    shareTurnoTextTieneTurnoEn: 'Tiene turno en',
    shareTurnoTextFecha: 'Fecha:',
    shareTurnoTextRecordatorio: 'Recuerde llevar su DNI'
  }),
  caso: JSON.stringify({
    title: 'Caso',
    tabs: [
      {
        name: 'Datos',
        icon: 'information-outline'
      },
      {
        name: 'Movimientos',
        icon: 'repeat-outline'
      },
      {
        name: 'Expedientes',
        icon: 'file-tray-full-outline'
      }
    ],
    buttonGuardar: 'Guardar',
    buttonEliminar: 'Eliminar',
    messageCamposRequeridos: 'Campos requeridos',
    stringAltaCasoMovimiento: 'Alta del caso',
    messageArchivosGuardadoConExito: 'Archivo añadido con éxito.',
    messageImposibilidadDerivarCaso: 'No es posible derivar un nuevo caso o dentro de la misma organizacion',
    messageCasoDerivadoConExito: 'El caso fue derivado exitosamente',
    notificacionCasoDerivadoTitle: 'Nuevo caso derivado',
    notificacionCasoDerivadoBody: 'Te han derivado el caso de',
    notificacionEnviadaConExitoA: 'Notificación enviada exitosamente a',
    form: {
      casoNoDerivadoText: 'Caso no derivado',
      casoDerivadoText: 'Caso derivado',
      cardDatosDelCasoTitle: 'Datos del caso',
      cardDatosDelCasoTiposDeCaso: [
        'Jubilación',
        'Pensión',
        'Reco',
        'Convenio'
      ],
      fechaComienzoCaso: {
        input: 'Fecha de Comienzo',
        validations: [
          {
            type: 'format',
            message: 'Formato incorrecto'
          }
        ]
      },
      tipo: {
        input: 'Tipo de trámite'
      },
      enviadoPor: {
        input: 'Enviado por'
      },
      derivadoA: {
        input: 'Derivado a'
      },
      comentarios: {
        input: 'Comentarios'
      }
    },
    cardTareasTitle: 'Tareas',
    cardTareasMessageSinTareas: 'Aún no se han registrado tareas',
    cardTareasLabelAddNewValidation: 'Antes de agregar una tarea, debe guardar el caso',
    cardTareasCompletadaLabel: 'Completada',
    cardTareasPendienteLabel: 'Pendiente',
    messageSalirSinGuardar: '¿Está seguro que desea salir sin guardar los cambios?',
    messageEditadoConExito: 'Cambios guardado con éxito.',
    messageGuardadoConExito: 'Nuevo Caso guardado con éxito.',
    messageEliminadoConExito: 'Caso eliminado con éxito.',
    alertEliminarTitle: 'Atención',
    alertEliminarSubTitle: '¿Está seguro que desea eliminar el caso, todos sus archivos, turnos y expedientes?',
    alertEliminarButtonNo: 'No',
    alertEliminarButtonYes: 'Si',
    messageDerivadoValidation: 'No es posible derivar un nuevo caso o derivarlo a un miembro dentro de su misma organización.',
    cardMovimientosTitle: 'Movimientos',
    cardMovimientosSelectFilterLabel: 'Filtrar por',
    cardMovimientosSelectFilter: [
      {
        label: 'Todos',
        value: 'todos'
      },
      {
        label: 'Sistema',
        value: 'sistema'
      },
      {
        label: 'Usuario',
        value: 'usuario'
      }
    ],
    derivarModal: {
      title: 'Derivar caso',
      cardTitle: 'Atención',
      cardSubtitle: 'La derivación del caso implica que usted y el resto de los usuarios de su organización, no puedan modificarlo en el futuro. El caso sera guardado en el estado actual para futuras referencias.',
      msgNoEsUsuarioDeIuris: 'La persona a la que intentas derivarle el caso, no posee cuenta de Iuris.',
      msgEnviarInvitacionIuris: 'Invita a tu colega a utilizar Iuris para poder derivarle un caso.',
      form: {
        email: {
          input: 'Correo electronico',
          validations: [
            {
              type: 'required',
              message: 'Campo requerido'
            }
          ]
        }
      },
      cancelarButton: 'Cancelar',
      derivarButton: 'Derivar'
    },
    cardMovimientosSelectFilterCancelarLabel: 'Cancelar',
    cardMovimientosLabelAddNewValidation: 'Debe guardar el caso antes de registrar un nuevo movimiento',
    cardTurnosTitle: 'Turnos',
    cardTurnosLabelAddNewValidation: 'Debe guardar el caso antes de registrar un nuevo turno',
    cardTurnosMessageSinTurnos: 'Aún no se han registrado turnos',
    cardExpedientesTitle: 'Expedientes',
    cardExpedientesLabelAddNewValidation: 'Debe guardar el caso antes de registrar un nuevo turno',
    cardExpedientesMessageSinExpedientes: 'Aún no se han registrado expedientes'
  }),
  cuota: JSON.stringify({
    title: 'Cuota',
    buttonGuardar: 'Guardar',
    buttonEliminar: 'Eliminar',
    messageCamposRequeridos: 'Campos requeridos',
    form: {
      cardDatosCuotaTitle: 'Datos de la cuota',
      monto: {
        input: 'Total',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'pattern',
            message: 'Debe ingresar un importe válido'
          }
        ]
      },
      fechaPago: {
        input: 'Fecha de pago',
        validations: [
          {
            type: 'pattern',
            message: 'Formato incorrecto'
          }
        ]
      },
      medioPago: {
        input: 'Medio de pago'
      },
      estadoPagaLabel: {
        input: 'Medio de pago'
      },
      cardOtrosDatosTitle: 'Otros datos',
      cardOtrosDatosLabelEstadoPaga: 'Paga',
      cardOtrosDatosLabelEstadoImpaga: 'Impaga'
    },
    messageSalirSinGuardar: '¿Está seguro que desea salir sin guardar los cambios?',
    messageEditadoConExito: 'Cambios guardado con éxito.',
    messageGuardadoConExito: 'Nueva Cuota guardada con éxito.',
    messageEliminadoConExito: 'Cuota eliminada con éxito.',
    alertEliminarTitle: 'Atención',
    alertEliminarSubTitle: '¿Está seguro que desea eliminar la cuota?',
    alertEliminarButtonNo: 'No',
    alertEliminarButtonYes: 'Si'
  }),
  pago: JSON.stringify({
    title: 'Pago',
    tabs: [
      {
        name: 'Datos',
        icon: 'information-outline'
      },
      {
        name: 'Cuotas',
        icon: 'calendar-outline'
      }
    ],
    buttonGuardar: 'Guardar',
    buttonEliminar: 'Eliminar',
    messageCamposRequeridos: 'Campos requeridos',
    form: {
      cardDatosDelPagoTitle: 'Datos del pago',
      total: {
        input: 'Total',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'pattern',
            message: 'Debe ingresar un importe válido'
          }
        ]
      },
      concepto: {
        input: 'Concepto',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      honorarioAcordado: {
        input: 'Honorario acordado'
      },
      notas: {
        input: 'Notas'
      },
      fechaComunicadoAlCliente: {
        input: 'Fecha de comunicacion',
        validations: [
          {
            type: 'pattern',
            message: 'Formato incorrecto'
          }
        ]
      }
    },
    messageSalirSinGuardar: '¿Está seguro que desea salir sin guardar los cambios?',
    messageEditadoConExito: 'Cambios guardado con éxito.',
    messageGuardadoConExito: 'Nuevo Pago guardado con éxito.',
    messageEliminadoConExito: 'Pago eliminado con éxito.',
    alertEliminarTitle: 'Atención',
    alertEliminarSubTitle: '¿Está seguro que desea eliminar el pago y todos sus archivos?',
    alertEliminarButtonNo: 'No',
    alertEliminarButtonYes: 'Si',
    cardCuotasTitle: 'Cuotas',
    cardCuotasValidMessage: '¡Atención!: El total de las cuotas supera el monto total del pago.',
    cardCuotasMessageSinCuotas: 'No hay cuotas registradas.',
    cardCuotasItem: 'Cuota ',
    cardCuotasItemPagaLabel: 'Paga',
    cardCuotasItemPagaElLabel: 'el ',
    cardCuotasItemImpagaLabel: 'Impaga',
    cardCuotasItemImpagaElLabel: 'prevista para el ',
    cardCuotasLabelAddNewValidation: 'Debe guardar el pago antes de registrar una nueva cuota',
    abonoModal: {
      title: 'Añadir multiples cuotas',
      cardSubtitle: 'Esta operación sobreescribira las cuotas de este pago',
      form: {
        cantidadCuotas: {
          input: 'Cantidad de cuotas',
          validations: [
            {
              type: 'required',
              message: 'Campo requerido'
            },
            {
              type: 'min',
              message: 'Minimo 1 cuota.'
            },
            {
              type: 'max',
              message: 'Maximo 36 cuotas.'
            }
          ]
        },
        fechaPrimerCuota: {
          input: 'Fecha de la primera cuota',
          validations: [
            {
              type: 'pattern',
              message: 'Formato incorrecto'
            }
          ]
        }
      },
      cancelarButton: 'Cancelar',
      cuotasButton: 'Crear'
    }
  }),
  pagos: JSON.stringify({
    title: 'Pagos',
    inputSearchBarPlaceholder: 'Buscar',
    messageSinRegistros: 'No se han encontrado Pagos que coincidan con los parámetros de búsqueda ingresados.',
    pagoLabel: 'Pago',
    impagoLabel: 'Impago'
  }),
  casos: JSON.stringify({
    title: 'Casos',
    inputSearchBarPlaceholder: 'Buscar',
    messageSinRegistros: 'No se han encontrado Casos que coincidan con los parámetros de búsqueda ingresados.',
    MIN_SEARCH_CHARACTERS: 3,
    FILTER_CASOS_TODOS: 'todos',
    FILTER_CASOS_DERIVADOS: 'derivados'
  }),
  clientes: JSON.stringify({
    title: 'Clientes',
    inputSearchBarPlaceholder: 'Buscar',
    messageSinRegistros: 'No se han encontrado Clientes que coincidan con los parámetros de búsqueda ingresados.'
  }),
  cliente: JSON.stringify({
    title: 'Cliente',
    tabs: [
      {
        name: 'Datos',
        icon: 'information-outline'
      },
      {
        name: 'Pagos',
        icon: 'cash-outline'
      },
      {
        name: 'Casos',
        icon: 'briefcase-outline'
      }
    ],
    buttonGuardar: 'Guardar',
    buttonEliminar: 'Eliminar',
    messageCamposRequeridos: 'Campos requeridos',
    form: {
      cardDatosPersonalesTitle: 'Datos personales',
      nombre: {
        input: 'Nombre',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      apellido: {
        input: 'Apellido',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      documentoNro: {
        input: 'Número de documento',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      documentoTipo: {
        input: 'Tipo de documento',
        values: [
          'DU',
          'LE',
          'LC',
          'LM',
          'LF',
          'CI',
          'Pasaporte'
        ]
      },
      cuil: {
        input: 'Cuil'
      },
      fechaNacimiento: {
        input: 'Fecha de nacimiento',
        validations: [
          {
            type: 'pattern',
            message: 'Formato incorrecto. Ejemplo: 12/12/2020'
          }
        ]
      },
      cardDatosPersonalesLabelEdad: 'Edad',
      nacionalidad: {
        input: 'Nacionalidad',
        validations: [
          {
            type: 'minlength',
            message: 'Mínimo 5 caracteres.'
          },
          {
            type: 'maxlength',
            message: 'Máximo 40 caracteres.'
          }]
      },
      estadoCivil: {
        input: 'Estado civil',
        values: [
          'Soltero',
          'Casado',
          'Viudo',
          'Divorciado',
          'Separado de hecho',
          'SIN INFORMAR'
        ]
      },
      sexo: {
        input: 'Sexo',
        values: [
          'Masculino',
          'Femenino'
        ]
      },
      cardDatosDeContactoTitle: 'Datos de contacto',
      direccion: {
        input: 'Dirección'
      },
      piso: {
        input: 'Piso'
      },
      departamento: {
        input: 'Departamento'
      },
      provincia: {
        input: 'Provincia'
      },
      localidad: {
        input: 'Localidad'
      },
      codigoPostal: {
        input: 'Código postal'
      },
      email: {
        input: 'Correo electrónico',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'pattern',
            message: 'Formato incorrecto. Ejemplo: nombre@email.com'
          }
        ]
      },
      telefono: {
        input: ' Teléfono'
      },
      cardOtrosDatosTitle: 'Otros datos',
      claveFiscal: {
        input: 'Clave fiscal'
      },
      claveSeguridadSocial: {
        input: 'Clave de seguridad social'
      }
    },
    messageSalirSinGuardar: '¿Está seguro que desea salir sin guardar los cambios?',
    messageEditadoConExito: 'Cambios guardado con éxito.',
    messageGuardadoConExito: 'Nuevo cliente guardado con éxito.',
    messageEliminadoConExito: 'Cliente eliminado con éxito.',
    cardResumenDeCasosTitle: 'Casos',
    cardResumenDeCasosMessageSinCasos: 'Aún no hay casos registrados',
    cardResumenDePagosTitle: 'Pagos',
    cardResumenDePagosMessageSinPagos: 'Aún no hay pagos registrados',
    alertEliminarTitle: 'Atención',
    alertEliminarSubTitle: '¿Está seguro que desea eliminar el cliente?',
    alertEliminarButtonNo: 'No',
    alertEliminarButtonYes: 'Si'
  }),
  settings: JSON.stringify({
    title: 'Ajustes',
    labelPanelDeControl: 'Panel de control',
    labelUsuario: 'Mi Usuario',
    labelOrganizacion: 'Organización',
    labelAyuda: 'Ayuda',
    labelFaq: 'FAQ',
    labelEnviarSugerencia: 'Enviar sugerencia',
    labelVersion: 'Versión: ',
    labelTerminosyCondiciones: 'Términos y condiciones',
    labelComprar: 'Comprar',
    messageVerifiedEmailErrorLabel: 'El email no se encuentra activado'
  }),
  home: JSON.stringify({
    title: 'Iuris',
    card1: 'Clientes',
    card1Description: 'Añadí nuevos clientes, modificalos y gestioná su información',
    card2: 'Pagos',
    card2Description: 'Añade nuevos pagos, modificalos y gestiona sus cuotas',
    card3: 'Casos',
    card3Description: 'Añade nuevos casos, modificalos y gestiona sus expdientes y movimientos.',
    card4: 'Recursos',
    card4Description: 'Añade nuevas normativas o formularios'
  }),
  login: JSON.stringify({
    title: 'Login',
    form: {
      email: {
        input: 'Correo electrónico',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'pattern',
            message: 'Formato incorrecto. Ejemplo: nombre@email.com'
          }
        ]
      },
      password: {
        input: 'Password',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'pattern',
            message: 'Formato incorrecto. La contraseña debe tener al menos 5 caracteres y contener una mayuscula, una minuscula y un número'
          }
        ]
      }
    },
    buttonPrimerIngreso: '¿Primer ingreso?',
    buttonOlvidasteContrasena: 'Recuperar/Cambiar contraseña ',
    buttonIngresar: 'Ingresar',
    buttonRegistrarse: 'Registrarse',
    messageVerifiedEmailFormatErrorLabel: 'Formato incorrecto. Ejemplo: nombre@email.com',
    alertPrimerIngresoLabelTitle: 'Primer ingreso',
    alertPrimerIngresoLabelDescription: 'Antes de utilizar el sistema, por favor, ingrese el email de registro para cambiar la contraseña.',
    alertPrimerIngresoInputEmail: 'Correo electrónico',
    alertPrimerIngresoButtonCancelar: 'Cancelar',
    alertPrimerIngresoButtonSolicitar: 'Solicitar',
    alertOlvidasteLaContrsenaLabelTitle: 'Recuperar contraseña',
    alertOlvidasteLaContrsenaLabelDescription: 'Introduzca el correo electronico para recuperar la contraseña',
    messageSentEmailSuccessLabel: 'Te hemos enviado un email para recuperar tu contraseña.',
    alertOlvidasteLaContrsenaInputEmail: 'Correo electrónico',
    alertOlvidasteLaContrsenaButtonCancelar: 'Cancelar',
    alertOlvidasteLaContrsenaButtonSolicitar: 'Solicitar',
    alertNoExisteUsuarioConEseEmail: 'No existe una cuenta asociada al correo electrónico ingresado. Verifique y vuelva a intentar',
    alertEmailNoValidadoHeader: 'El email no se encuentra validado',
    alertEmailNoValidadoMessage: 'Por favor, valide su email antes de ingresar'
  }),
  organization: JSON.stringify({
    title: 'Organización',
    tabs: [
      {
        name: 'Datos',
        icon: 'information-outline'
      },
      {
        name: 'Usuarios',
        icon: 'people-circle-outline'
      },
      {
        name: 'Planes',
        icon: 'tags-outline'
      }
    ],
    buttonGuardar: 'Guardar',
    buttonEliminar: 'Eliminar',
    messageCamposRequeridos: 'Campos requeridos',
    shareDetailsTitle: 'Datos de: ',
    shareDetailsTelefono: 'Teléfono: ',
    shareDetailsEmail: 'Email: ',
    shareDetailsAliasBancario: 'Alias bancario: ',
    form: {
      cardDatosDeLaOrganizacionTitle: 'Datos de la organización',
      nombre: {
        input: 'Nombre',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      domicilio: {
        input: 'Domicilio',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      nombreApellidoResponsable: {
        input: 'Responsable',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      cuit: {
        input: 'Cuil',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      },
      emailContacto: {
        input: 'Correo electrónico',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          },
          {
            type: 'pattern',
            message: 'Formato incorrecto. Ejemplo: nombre@email.com'
          }
        ]
      },
      telefonoContacto: {
        input: ' Teléfono',
        validations: [
          {
            type: 'required',
            message: 'Campo requerido'
          }
        ]
      }
    },
    cardDependenciasPersonalizadasTitle: 'Dependencias',
    messageSinDependencias: 'Crea aquí tus dependencias personalizadas.',
    cardPlanesTitle: 'Planes',
    messageSalirSinGuardar: '¿Está seguro que desea salir sin guardar los cambios?',
    messageEditadoConExito: 'Cambios guardado con éxito.',
    messageGuardadoConExito: 'Usuario guardado con éxito. Ya puede notificar al usuario para que ingrese por primera vez.',
    messageEliminadoConExito: 'Usuario eliminado con éxito.',
    cardUsuariosTitle: 'Datos de la organizacion',
    cardUsuariosInfoMessage: 'Los usuarios que se muestran no incluyen al responsable de la entidad. ',
    cardUsuariosSinUsuarios: 'No hay usuarios registrados',
    alertEliminarDependenciaTitle: 'Atención',
    alertEliminarDependenciaSubTitle: '¿Está seguro que desea eliminar la dependencia personalizada?',
    alertAnadirUsuarioTitle: 'Añadir usuario',

    alertAnadirUsuarioSubTitle: 'El usuario que esta a punto de agregar no tiene derechos de administrador y esta habiliatado por defecto. Luego de registrar al usuario, el mismo debera modificar la contraseña antes del primer ingreso.',
    alertAnadirUsuarioButtonNo: 'No',
    alertAnadirUsuarioButtonYes: 'Si',
    alertAnadirUsuarioUserValidation: 'Debe ingresar un nombre y un apellido',
    alertAnadirUsuarioEmailValidation: 'El email debe tener un formato correcto y no estar registrado previamente. Ejemplo: juan@example.com',
    alertAnadirUsuarioNombrePlaceholder: 'Nombre',
    alertAnadirUsuarioApellidoPlaceholder: 'Apellido',
    alertAnadirUsuarioEmailPlaceholder: 'Correo electronico',
    alertShowUserPermitsTitle: 'Atención',

    alertShowUserPermitsSubTitle: 'Esta a punto de moficar la condicion de un usuario.Dicha modificacion puede demorar hasta media hora en tomar efecto o el usuario modificado debera volver a iniciar sesion.',
    alertShowUserPermitsButtonNo: 'Cancelar',
    alertShowUserPermitsButtonYes: 'Confirmar',
    alertShowUserPermitsLabelAdministrador: 'Administrador',
    alertShowUserPermitsLabelActivo: 'Activo',
    alertRemoveUserTitle: 'Atención',
    alertRemoveUserSubTitle: 'Esta a punto de eliminar a un usuario. Dicha accion no puede ser modificada y el usuario sera removido de la institucion.',
    alertRemoveUserButtonNo: 'Cancelar',
    alertRemoveUserButtonYes: 'Confirmar',
    alertRemoveUserEmailValidation: 'Para poder eliminar a un usuario, el email debe estar validado.',

    planesInfoMessage: 'Si contás con un plan pago, podés renovarlo dentro de los 30 días anteriores al vencimiento.',
    planesRenovarButton: 'Renovar',
    alertEliminarOrganizacionForm: {
      alertEliminarOrganizacionTitle: 'Atención!',
      alertEliminarOrganizacionCardTitle: 'Esta a punto de eliminar la cuenta.',
      alertEliminarOrganizacionCardSubTitle: 'Esta operacion no se puede deshacer. Antes de continuar, asegúrese que desea eliminar todos sus Clientes, Pagos y Casos',
      alertEliminarOrganizacionCancelarButton: 'Cancelar',
      alertEliminarOrganizacionEliminarButton: 'Eliminar',
      alertOrganizacionEliminadaTitle: 'Organización eliminada exitosamente',
      alertOrganizacionEliminadaMessage: 'Se han eliminado los datos de su cuenta.',
      organization: {
        input: 'Nombre de la organización',
        validations: [
          {
            type: 'required',
            message: 'El campo es requerido'
          },
          {
            type: 'minlength',
            message: 'Mínimo 5 caracteres.'
          },
          {
            type: 'maxlength',
            message: 'Máximo 50 caracteres.'
          }
        ]
      }
    },
    alertCustomDependenciaForm: {
      alertCustomDependenciaTitle: 'Dependencia personalizada',
      alertCustomDependenciaCardTitle: 'Administrar tu dependencia personalizada',

      alertCustomDependenciaCardSubTitle: 'Las dependencias personalizadas te permiten cargar nuevos lugares donde se encuentran tus expedientes o donde debas atender un evento con un tercero (turno).',
      alertCustomDependenciaCancelarButton: 'Cancelar',
      alertCustomDependenciaGuardarButton: 'Guardar',
      organismo: {
        input: 'Nombre del organismo',
        validations: [
          {
            type: 'required',
            message: 'El campo es requerido'
          },
          {
            type: 'minlength',
            message: 'Mínimo 3 caracteres.'
          },
          {
            type: 'maxlength',
            message: 'Máximo 100 caracteres.'
          }
        ]
      },
      nombre: {
        input: 'Nombre de la institucion',
        validations: [
          {
            type: 'required',
            message: 'El campo es requerido'
          },
          {
            type: 'minlength',
            message: 'Mínimo 3 caracteres.'
          },
          {
            type: 'maxlength',
            message: 'Máximo 100 caracteres.'
          }
        ]
      },
      direccion: {
        input: 'Direccion de la institucion',
        validations: [
          {
            type: 'required',
            message: 'El campo es requerido'
          },
          {
            type: 'minlength',
            message: 'Mínimo 3 caracteres.'
          },
          {
            type: 'maxlength',
            message: 'Máximo 100 caracteres.'
          }
        ]
      }
    }
  })
};

