import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';

import { OrganizationFormComponent } from './organization-form.component';

describe('OrganizationFormComponent', () => {
  let component: OrganizationFormComponent;
  let fixture: ComponentFixture<OrganizationFormComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationFormComponent],
      imports: [
        IonicModule,
        CommonModule,
        SimpleMaskModule,
        FormsModule,
        ReactiveFormsModule,
        IurisUtilsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationFormComponent);
    component = fixture.componentInstance;
    component.organizationForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      domicilio: new FormControl('', Validators.required),
      nombreApellidoResponsable: new FormControl('', Validators.required),
      emailContacto: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      telefonoContacto: new FormControl('', Validators.required),
      cuit: new FormControl('', Validators.required),
      alias: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(100),
            ]),
          updateOn: 'change'
        }
      ),
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should share details', () => {
  //   component.shareDetails();
  //   expect(component).toBeTruthy();
  // });
});
