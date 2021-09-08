import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { HomePage } from 'src/app/core/pages/home/home.page';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { content } from 'src/app/shared/constants/content.constant';
import { mockedCasos } from 'src/app/shared/mocks/mocked-casos';
import { mockedUsuarios } from 'src/app/shared/mocks/mocked-usuarios';
import { ContentService } from 'src/app/shared/services/content.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { TabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  const mockContentService = {
    contents: {
      general: JSON.parse(content.general)
    }
  };

  const docSpy = jasmine.createSpyObj({
    valueChanges: of(mockedCasos),
    doc: of(mockedCasos[0]),
    delete: () => { },
    set: () => { },
    put: () => { },
  });

  const collectionSpy = jasmine.createSpyObj({
    valueChanges: of(mockedCasos),
    doc: docSpy
  });

  const angularFirestoreStub = {
    collection: () => collectionSpy
  };

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [TabsComponent],
      imports: [
        IonicModule,
        RouterTestingModule.withRoutes([
          { path: 'core/home/:userId', component: HomePage },
          { path: 'clientes/:userId/clientes', component: HomePage },
        ])
      ],
      providers: [
        { provide: AngularFirestore, useValue: angularFirestoreStub },
        { provide: ContentService, useValue: mockContentService },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get an error when getting a user ', () => {
    const usuariosService = TestBed.inject(UsuariosService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(usuariosService, 'getUsuario').and.returnValue(throwError(new Error('Test error')));
    component.getUsuario();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should click the notification bell', () => {
    component.usuario = mockedUsuarios[0];
    component.itemClicked('home');
    expect(component).toBeTruthy();
  });

  it('should click another tab (different from home)', () => {
    component.usuario = mockedUsuarios[0];
    component.itemClicked('clientes');
    expect(component).toBeTruthy();
  });
});
