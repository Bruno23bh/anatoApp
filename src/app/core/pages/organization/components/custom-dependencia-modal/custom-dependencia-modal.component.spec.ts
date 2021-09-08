import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';

import { OrganizationPageModule } from '../../organization.module';
import { CustomDependenciaModalComponent } from './custom-dependencia-modal.component';

describe('CustomDependenciaModalComponent', () => {
  let component: CustomDependenciaModalComponent;
  let fixture: ComponentFixture<CustomDependenciaModalComponent>;

  const modalSpy = jasmine.createSpyObj('Modal', ['present', 'onWillDismiss', 'dismiss']);
  const modalControllerSpy = jasmine.createSpyObj('ModalController', ['create', 'dismiss']);
  modalControllerSpy.create.and.callFake(() => modalSpy);

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule,
        CommonModule,
        SimpleMaskModule,
        FormsModule,
        ReactiveFormsModule,
        IurisUtilsModule,
        OrganizationPageModule
      ],
      providers: [
        { provide: ModalController, useValue: modalControllerSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomDependenciaModalComponent);
    component = fixture.componentInstance;
    component.customDependenciaForm = new FormGroup({
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
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dismiss', () => {
    component.dismiss(true);
    expect(component).toBeTruthy();
  });
});
