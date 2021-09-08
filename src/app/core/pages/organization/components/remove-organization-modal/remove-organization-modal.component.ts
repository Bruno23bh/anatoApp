import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-remove-organization-modal',
  templateUrl: './remove-organization-modal.component.html',
  styleUrls: ['./remove-organization-modal.component.scss'],
})
export class RemoveOrganizationModalComponent implements OnInit {
  @Input() content: {
    alertEliminarOrganizacionTitle: string;
    alertEliminarOrganizacionCardTitle: string;
    alertEliminarOrganizacionCardSubTitle: string;
    alertEliminarOrganizacionCancelarButton: string;
    alertEliminarOrganizacionEliminarButton: string;
    alertEliminarOrganizacionNoCoincideNombre: string;
    organization: {
      input: string;
      validations: {
        type: string;
        message: string;
      }[];
    };
  };
  @Input() organizationName: string;
  alertEliminarOrganizacionForm: FormGroup;

  constructor(
    private modalController: ModalController) { }

  ngOnInit() {
    this.buildDerivarForm();
  }

  buildDerivarForm() {
    this.alertEliminarOrganizacionForm = new FormGroup({
      organization: new FormControl(
        null,
        {
          validators:
            Validators.compose([
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(100),
            ]),
          updateOn: 'blur'
        }
      ),
    });
  }

  dismiss(option: boolean) {
    if (option) {
      this.modalController.dismiss(option);
    }
  }

}
