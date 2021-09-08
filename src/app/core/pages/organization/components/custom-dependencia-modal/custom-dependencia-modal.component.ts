import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Dependencia } from 'src/app/core/interfaces/dependencia';


@Component({
  selector: 'app-custom-dependencia-modal',
  templateUrl: './custom-dependencia-modal.component.html',
  styleUrls: ['./custom-dependencia-modal.component.scss'],
})
export class CustomDependenciaModalComponent implements OnInit {
  @Input() customDependencia: Dependencia;
  @Input() content: {
    alertCustomDependenciaTitle: string;
    alertCustomDependenciaCardTitle: string;
    alertCustomDependenciaCardSubTitle: string;
    alertCustomDependenciaCancelarButton: string;
    alertCustomDependenciaGuardarButton: string;
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
  customDependenciaForm: FormGroup;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.buildCustomDependenciaForm();
    if (this.customDependencia) {
      this.customDependenciaForm.patchValue(this.customDependencia);
    }
  }

  buildCustomDependenciaForm() {
    this.customDependenciaForm = new FormGroup({
      organismo: new FormControl(
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
      nombre: new FormControl(
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
      direccion: new FormControl(
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
      )
    });
  }

  dismiss(option: boolean) {
    if (option) {
      const customDependencia: Dependencia = {
        ...this.customDependenciaForm.value,
        id: this.customDependencia ? this.customDependencia.id : null,
        auto: false
      };
      this.modalController.dismiss(customDependencia);
    } else {
      this.modalController.dismiss(option);
    }
  }
}
