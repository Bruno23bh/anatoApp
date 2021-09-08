import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Plugins } from '@capacitor/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
const { Clipboard } = Plugins;

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() userForm: FormGroup;
  @Input() content: {
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
  };

  constructor() { }

  ngOnInit() { }

  async copyToClipboard(data: string) {
    // eslint-disable-next-line id-blacklist
    Clipboard.write({ string: data });
  }
}
