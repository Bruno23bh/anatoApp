import { Caso } from 'src/app/casos/interfaces/caso';

// import * as moment from 'moment';
const mockedCasos: Caso[] =
    [
        {
            derivado: false,
            clienteNombreApellido: 'Pablo Gil',
            activo: false,
            organizacionesIds: ['ocRez6cnzEDbhiEgyUO0'],
            turnos: [
                {
                    fecha: '31/12/2020',
                    dependencia: {
                        id: 'adsadasdasda12',
                        organismo: 'ANSES',
                        auto: false,
                        nombre: 'UDAI Centro',
                        direccion: 'Av. Cordoba 1118'
                    },
                    asignadoA: 'infoutsimplex@gmail.com',
                    hora: '',
                    numero: 1
                }
            ],
            comentarios: '',
            derivadoA: '',
            movimientos: [
                {
                    origen: 'Sistema',
                    referencia: 'Alta del caso Jubilación',
                    numero: 1,
                    fechaDetalle: '2020-05-04T17:22:52.646Z'
                },
                {
                    origen: 'Sistema',
                    referencia: 'Nuevo turno en UDAI Centro',
                    numero: 2,
                    fechaDetalle: '2020-05-04T17:24:04.495Z'
                },
                {
                    origen: 'Sistema',
                    referencia: 'Nuevo expediente en UDAI Floresta II',
                    numero: 3,
                    fechaDetalle: '2020-05-04T17:24:41.145Z'
                },
                {
                    origen: 'Usuario',
                    referencia: 'Otro movimiento',
                    numero: 4,
                    descripcion: 'Algo paso aqui',
                    fechaDetalle: '01/01/2020'
                }
            ],
            fechaDeInicio: '',
            clienteId: 'WGHpyObl54vXXNQHJ79g',
            files: [{
                filePath: 'casos/oeRv9R16HfIDLELjZLl9/Foto-2020-06-03T22:19:22.320Z',
                size: 5242880,
                fileUrl: 'https://firebasestorage.googleapis.com/v0/b/dev-iuris.appspot.com/o/casos%2FoeRv9R16HfIDLELjZLl9%2FFoto-2020-06-03T22%3A19%3A22.320Z?alt=media&token=93488b54-af0e-43f4-8755-806ba7c61c05',
                name: 'Foto-2020-06-03T22:19:22.320Z',
                type: 'image/jpeg'
            }],
            tareas: [
                {
                    numero: 1,
                    titulo: 'Test',
                    descripcion: 'test',
                    realizada: false,
                    fecha: '31/12/2020',
                    asignadoA: 'infoutsimplex@gmail.com',
                },
                {
                    numero: 2,
                    titulo: 'Test 2',
                    descripcion: 'test 2',
                    realizada: false,
                    fecha: '12/12/20202',
                    asignadoA: 'gil.a.pablo1@gmail.com',
                }
            ],
            enviadoPor: '',
            id: 'uISiAa4DDzGwmEDR5MgT',
            expedientes: [
                {
                    estado: 'Iniciado',
                    numeroExpediente: '1234',
                    numero: 1,
                    auto: false,
                    fechaInicio: '30/10/2020',
                    ubicacionInicial: {
                        id: 'adsadasdasda12',
                        organismo: 'ANSES',
                        auto: false,
                        nombre: 'UDAI Floresta II',
                        direccion: 'Av. Segurola 1129 / 33'
                    },
                    ubicacionActual: {
                        id: 'adsadasdasda123',
                        organismo: 'ANSES',
                        auto: false,
                        nombre: 'UDAI Floresta II',
                        direccion: 'Av. Segurola 1129 / 33'
                    }
                }
            ],
            fechaComienzoCaso: '',
            tipo: 'Jubilación',
            fechaUltimaModificacion: '17/11/2020'
        },
        {
            derivado: false,
            clienteNombreApellido: 'Gil Pablo',
            activo: false,
            organizacionesIds: ['ocRez6cnzEDbhiEgyUO0'],
            turnos: [
                {
                    fecha: '2020-05-04T14:23:46.512-03:00',
                    dependencia: {
                        id: 'adsadasdasda12',
                        organismo: 'ANSES',
                        auto: false,
                        nombre: 'UDAI Centro',
                        direccion: 'Av. Cordoba 1118'
                    },
                    asignadoA: '',
                    hora: '',
                    numero: 1
                }
            ],
            comentarios: '',
            derivadoA: '',
            movimientos: [],
            fechaDeInicio: '',
            clienteId: 'WGHpyObl54vXXNQHJ79g',
            files: [{
                filePath: 'casos/oeRv9R16HfIDLELjZLl9/Foto-2020-06-03T22:19:22.320Z',
                size: 5242880,
                fileUrl: 'https://firebasestorage.googleapis.com/v0/b/dev-iuris.appspot.com/o/casos%2FoeRv9R16HfIDLELjZLl9%2FFoto-2020-06-03T22%3A19%3A22.320Z?alt=media&token=93488b54-af0e-43f4-8755-806ba7c61c05',
                name: 'Foto-2020-06-03T22:19:22.320Z',
                type: 'image/jpeg'
            }],
            tareas: [
                {
                    numero: 1,
                    titulo: 'Test',
                    descripcion: 'test',
                    realizada: false,
                    fecha: '12/12/20202',
                    asignadoA: '',
                },
                {
                    numero: 2,
                    titulo: 'Test 2',
                    descripcion: 'test 2',
                    realizada: false,
                    fecha: '12/12/20202',
                    asignadoA: '',
                }
            ],
            enviadoPor: '',
            id: 'uISiAa4DDzGwmEDR5MgT',
            expedientes: [
                {
                    estado: 'Iniciado',
                    numeroExpediente: '1234',
                    numero: 1,
                    auto: false,
                    fechaInicio: '30/10/2020',
                    ubicacionInicial: {
                        id: 'adsadasdasda12',
                        organismo: 'ANSES',
                        auto: false,
                        nombre: 'UDAI Floresta II',
                        direccion: 'Av. Segurola 1129 / 33'
                    },
                    ubicacionActual: {
                        id: 'adsadasdasda123',
                        organismo: 'ANSES',
                        auto: false,
                        nombre: 'UDAI Floresta II',
                        direccion: 'Av. Segurola 1129 / 33'
                    }
                }
            ],
            fechaComienzoCaso: '',
            tipo: 'Jubilación',
            fechaUltimaModificacion: '17/11/2020'
        }
    ];

const emptyCaso: Caso = {
    derivado: false,
    clienteNombreApellido: '',
    activo: false,
    organizacionesIds: [],
    turnos: [],
    comentarios: '',
    derivadoA: '',
    movimientos: [],
    fechaDeInicio: '',
    clienteId: '',
    files: [],
    tareas: [],
    enviadoPor: '',
    id: '0',
    expedientes: [],
    fechaComienzoCaso: '',
    tipo: ''
};

export {
    mockedCasos,
    emptyCaso
};
