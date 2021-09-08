import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { IonicModule, ModalController } from '@ionic/angular';

import { TermsAndConditionsModalComponent } from './terms-and-conditions-modal.component';

const angularFireRemoteConfigStub = {};

describe('TermsAndConditionsModalComponent', () => {
  let component: TermsAndConditionsModalComponent;
  let fixture: ComponentFixture<TermsAndConditionsModalComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [TermsAndConditionsModalComponent],
      imports: [
        IonicModule
      ],
      providers: [
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TermsAndConditionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dismiss the modal', () => {
    const modalController = TestBed.inject(ModalController);
    spyOn(modalController, 'dismiss');
    component.dismiss();
    expect(modalController.dismiss).toHaveBeenCalled();
  });
});
