// import * as moment from 'moment';
import { Pago } from 'src/app/pagos/interfaces/pago';

const mockedPagos: Pago[] = [
    {
        id: 'xz07tOuW1IM4HAGqzgWh',
        organizacionId: 'ocRez6cnzEDbhiEgyUO0',
        cuotas: [
            {
                monto: 10,
                estado: false,
                numero: 1,
                fechaPago: '31/12/2020'
            },
            {
                monto: 10,
                estado: true,
                numero: 1,
                fechaPago: '31/12/2020'
            }
        ],
        clienteNombreApellido: 'Algoglio Alberto',
        notas: 'ajajha',
        estado: false,
        fechaVencimiento: '31/12/2020',
        total: 10,
        concepto: '',
        fechaComunicadoAlCliente: '',
        files: [{
            type: 'image/jpeg',
            fileUrl: 'https://firebasestorage.googleapis.com/v0/b/dev-iuris.appspot.com/o/pagos%2FaAvmxoUSeWh9xF0eamuo%2Fhomer%20brazo%20musculoso.jpg?alt=media&token=01a041c2-03f2-413a-bf73-5f9dcc3fcca4',
            filePath: 'pagos/aAvmxoUSeWh9xF0eamuo/homer brazo musculoso.jpg',
            name: 'homer brazo musculoso.jpg',
            size: 1073741824
        }],
        clienteId: '0',
        honorarioAcordado: 'ahaha',
        vencido: false,
    },
    {
        cuotas: [
            {
                monto: 10,
                estado: false,
                numero: 1,
                fechaPago: ''
            }
        ],
        id: 'c0i4YFkM0BPylWjVuaEK',
        organizacionId: 'ocRez6cnzEDbhiEgyUO0',
        clienteNombreApellido: 'Arrighi Dante',
        estado: false,
        notas: '',
        concepto: '',
        vencido: false,
        fechaComunicadoAlCliente: '',
        total: 678,
        clienteId: 'OqrhQmV5CDHl4xLTWpwd',
        files: [{
            filePath: 'casos/oeRv9R16HfIDLELjZLl9/Foto-2020-06-03T22:19:22.320Z',
            fileUrl: 'https://firebasestorage.googleapis.com/v0/b/dev-iuris.appspot.com/o/casos%2FoeRv9R16HfIDLELjZLl9%2FFoto-2020-06-03T22%3A19%3A22.320Z?alt=media&token=93488b54-af0e-43f4-8755-806ba7c61c05',
            name: 'Foto-2020-06-03T22:19:22.320Z',
            type: 'image/jpeg',
            size: 1073741824
        }],
        honorarioAcordado: ''
    },
    {
        id: 'hg6ysNUJCmfx9qF6BFoz',
        vencido: false,
        organizacionId: 'ocRez6cnzEDbhiEgyUO0',
        cuotas: [
            {
                monto: 150,
                estado: false,
                numero: 1,
                fechaPago: ''
            }
        ],
        clienteNombreApellido: 'Arrighiii Danteee',
        notas: '',
        estado: false,
        total: 150,
        concepto: '',
        fechaComunicadoAlCliente: '',
        files: [],
        clienteId: 'OqrhQmV5CDHl4xLTWpwd',
        honorarioAcordado: ''
    },
    {
        notas: 'hola pablitouuuuuuu',
        vencido: false,
        estado: false,
        fechaComunicadoAlCliente: '',
        total: 150,
        concepto: '',
        clienteId: 'PG71Ydzr3RGbhycW4YHv',
        files: [],
        honorarioAcordado: '',
        organizacionId: 'ocRez6cnzEDbhiEgyUO0',
        cuotas: [
            {
                numero: 1,
                fechaPago: '',
                monto: 150,
                estado: false
            }
        ],
        id: 'FjT8vrLrv4Xh2pMfpvrw',
        clienteNombreApellido: 'Medina Hugo'
    },
    {
        honorarioAcordado: '100',
        id: 'aAvmxoUSeWh9xF0eamuo',
        vencido: false,
        organizacionId: 'ocRez6cnzEDbhiEgyUO0',
        cuotas: [
            {
                estado: false,
                numero: 1,
                fechaPago: '21/12/2021',
                monto: 2
            }
        ],
        clienteNombreApellido: 'Chainal Irenex',
        notas: 'uuuuMODIFICADOooooasdfasdfasdfasdf',
        estado: false,
        total: 2,
        concepto: '',
        fechaComunicadoAlCliente: '12/12/2021',
        clienteId: 'Guhlmc4rQzxhXInJZB0x',
        files: [
            {
                type: 'image/jpeg',
                fileUrl: 'https://firebasestorage.googleapis.com/v0/b/dev-iuris.appspot.com/o/pagos%2FaAvmxoUSeWh9xF0eamuo%2Fhomer%20brazo%20musculoso.jpg?alt=media&token=01a041c2-03f2-413a-bf73-5f9dcc3fcca4',
                filePath: 'pagos/aAvmxoUSeWh9xF0eamuo/homer brazo musculoso.jpg',
                name: 'homer brazo musculoso.jpg',
                size: 1073741824
            }
        ]
    },
    {
        total: 120,
        vencido: false,
        fechaComunicadoAlCliente: '',
        files: [
            {
                filePath: 'pagos/XCeIlF6mzlNSBMPejgQk/Empanada integral verduras.jpg',
                size: 1073741824,
                name: 'Empanada integral verduras.jpg',
                type: 'image/jpeg',
                fileUrl: 'https://firebasestorage.googleapis.com/v0/b/dev-iuris.appspot.com/o/pagos%2FXCeIlF6mzlNSBMPejgQk%2FEmpanada%20integral%20verduras.jpg?alt=media&token=8508e28d-342b-41ce-8b7e-6493dd90c339'
            }
        ],
        clienteId: 'le3f2psUjPT8A3HYNy99',
        honorarioAcordado: '',
        concepto: '',
        id: 'XCeIlF6mzlNSBMPejgQk',
        organizacionId: 'ocRez6cnzEDbhiEgyUO0',
        cuotas: [
            {
                monto: 120,
                medioPago: '',
                estado: false,
                numero: 1,
                fechaPago: ''
            },
            {
                estado: false,
                numero: 2,
                fechaPago: '',
                monto: 1235,
                medioPago: ''
            }
        ],
        clienteNombreApellido: 'Pons Nico',
        notas: 'Test',
        estado: false
    },
    {
        total: 5000,
        fechaComunicadoAlCliente: '',
        concepto: '',
        vencido: false,
        clienteId: 'NbLN0e9NYvGlrl25X4s2',
        files: [
            {
                type: 'image/jpeg',
                fileUrl: 'https://firebasestorage.googleapis.com/v0/b/dev-iuris.appspot.com/o/pagos%2FHz9L16NIDYfFwsT00h4u%2Fdedust2%20CT.jpg?alt=media&token=ec1700bb-672f-4eeb-98ce-23990b1a93f2',
                filePath: 'pagos/Hz9L16NIDYfFwsT00h4u/dedust2 CT.jpg',
                name: 'dedust2 CT.jpg',
                size: 1073741824
            }
        ],
        honorarioAcordado: 'Le cobro 3 jubilaciones',
        id: 'Hz9L16NIDYfFwsT00h4u',
        organizacionId: 'ocRez6cnzEDbhiEgyUO0',
        cuotas: [
            {
                estado: false,
                numero: 1,
                fechaPago: '',
                monto: 2500,
                medioPago: ''
            },
            {
                estado: false,
                numero: 2,
                fechaPago: '',
                monto: 2500,
                medioPago: ''
            }
        ],
        clienteNombreApellido: 'Rodríguez Renegado',
        estado: false,
        notas: 'nota'
    },
    {
        notas: 'Chorizord',
        concepto: '',
        estado: false,
        vencido: false,
        fechaComunicadoAlCliente: '01/01/2020',
        total: 999,
        files: [],
        clienteId: 'NbLN0e9NYvGlrl25X4s2',
        honorarioAcordado: '',
        cuotas: [
            {
                estado: false,
                numero: 1,
                fechaPago: '',
                monto: 9999
            }
        ],
        id: 'qwJPbiEJX5nBsN7pdDm2',
        organizacionId: 'ocRez6cnzEDbhiEgyUO0',
        clienteNombreApellido: 'Rodríguez Renegado'
    }
];

const emptyPago: Pago = {
    id: '0',
    organizacionId: '',
    vencido: false,
    clienteId: '0',
    concepto: '',
    clienteNombreApellido: '',
    notas: '',
    estado: false,
    fechaComunicadoAlCliente: '',
    total: 0,
    cuotas: [],
    files: []
};

export {
    mockedPagos,
    emptyPago
};
