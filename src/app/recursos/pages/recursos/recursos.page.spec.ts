import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { content } from 'src/app/shared/constants/content.constant';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';
import { mockedCasos } from 'src/app/shared/mocks/mocked-casos';
import { mockedUsuarios } from 'src/app/shared/mocks/mocked-usuarios';
import { ContentService } from 'src/app/shared/services/content.service';

import { RecursosPage } from './recursos.page';

describe('RecursosPage', () => {
  let component: RecursosPage;
  let fixture: ComponentFixture<RecursosPage>;

  const mockContentService = {
    contents: {
      recursos: JSON.parse(content.recursos)
    }
  };

  const angularFireRemoteConfigStub = {};

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [RecursosPage],
      imports: [
        IonicModule,
        IurisUtilsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: ContentService, useValue: mockContentService },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              params:
              {
                id: mockedCasos[0].id
              },
              data: {
                usuario: mockedUsuarios[0]
              }
            }
          }
        }]
    }).compileComponents();

    fixture = TestBed.createComponent(RecursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to the formularios page', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.usuario = mockedUsuarios[0];
    component.goToFormularios();
    expect(routerService.navigate).toHaveBeenCalled();
  });

  it('should go to the normativas page', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.usuario = mockedUsuarios[0];
    component.goToNormativas();
    expect(routerService.navigate).toHaveBeenCalled();
  });

  it('should go to the privados page', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.usuario = mockedUsuarios[0];
    component.goToPrivados();
    expect(routerService.navigate).toHaveBeenCalled();
  });

  it('should go back', (() => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.usuario = mockedUsuarios[0];
    component.onBack();
    expect(routerService.navigate).toHaveBeenCalled();
  }));
});
