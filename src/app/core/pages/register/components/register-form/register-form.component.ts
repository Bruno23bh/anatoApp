import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  @Input() registerForm: FormGroup;
  @Input() matchingPasswordsGroup: FormGroup;
  @Input() matchingPasswordsFormContent: {
    password: {
      input: string; // Required (Max 50) - Pattern
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
      input: string; // Required (Max 50) - Pattern
      validations: [
        {
          type: string;
          message: string;
        }]
      ;
    };
  };
  @Input() content: {
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
  isPasswordVisible = false;
  isRepeatPasswordVisible = false;

  constructor() { }

  ngOnInit() { }

  showHidePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  showHideRepeatPassword() {
    this.isRepeatPasswordVisible = !this.isRepeatPasswordVisible;
  }

}
