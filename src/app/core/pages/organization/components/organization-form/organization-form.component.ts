import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.scss'],
})
export class OrganizationFormComponent implements OnInit {
  @Input() organizationForm: FormGroup;
  @Input() isDesktop: boolean;
  @Output() shareDetailsEvent = new EventEmitter<void>();
  @Input() content: {
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

  constructor() { }

  ngOnInit() { }

  shareDetails() {
    this.shareDetailsEvent.emit();
  }

}
