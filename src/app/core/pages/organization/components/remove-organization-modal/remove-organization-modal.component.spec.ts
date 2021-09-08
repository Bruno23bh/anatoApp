import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { OrganizationPageModule } from '../../organization.module';
import { RemoveOrganizationModalComponent } from './remove-organization-modal.component';

describe('RemoveOrganizationModalComponent', () => {
  let component: RemoveOrganizationModalComponent;
  let fixture: ComponentFixture<RemoveOrganizationModalComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OrganizationPageModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveOrganizationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dismiss the modal', () => {
    const modalController = TestBed.inject(ModalController);
    spyOn(modalController, 'dismiss');
    component.dismiss(true);
    expect(modalController.dismiss).toHaveBeenCalled();
  });
});
