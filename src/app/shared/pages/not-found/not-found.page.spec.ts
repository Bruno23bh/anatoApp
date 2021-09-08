import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from 'src/app/core/pages/login/login.page';

import { content } from '../../constants/content.constant';
import { ContentService } from '../../services/content.service';
import { NotFoundPageRoutingModule } from './not-found-routing.module';
import { NotFoundPage } from './not-found.page';

describe('NotFoundPage', () => {
  let component: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;

  const mockContentService = {
    contents: {
      notFound: JSON.parse(content.notFound)
    }
  };

  const angularFireRemoteConfigStub = {};

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPage],
      imports: [
        IonicModule,
        CommonModule,
        RouterTestingModule.withRoutes([
          { path: 'core/login', component: LoginPage }
        ]),
        NotFoundPageRoutingModule
      ],
      providers: [
        { provide: ContentService, useValue: mockContentService },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
