import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from 'src/app/core/pages/home/home.page';

import { content } from '../../constants/content.constant';
import { ContentService } from '../../services/content.service';
import { NotAllowPage } from './not-allow.page';

describe('NotAllowPage', () => {
  let component: NotAllowPage;
  let fixture: ComponentFixture<NotAllowPage>;

  const mockContentService = {
    contents: {
      notAllow: JSON.parse(content.notAllow)
    }
  };

  const angularFireRemoteConfigStub = {};

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [NotAllowPage],
      imports: [
        IonicModule,
        RouterTestingModule.withRoutes([
          { path: 'core/home/:userId', component: HomePage }
        ]),
        CommonModule,
      ],
      providers: [
        { provide: ContentService, useValue: mockContentService },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NotAllowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
