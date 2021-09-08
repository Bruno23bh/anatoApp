import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { content } from 'src/app/shared/constants/content.constant';
import { ContentService } from 'src/app/shared/services/content.service';

import { FaqPageRoutingModule } from './faq-routing.module';
import { FaqPage } from './faq.page';

describe('FaqPage', () => {
  let component: FaqPage;
  let fixture: ComponentFixture<FaqPage>;

  const mockContentService = {
    contents: {
      faq: JSON.parse(content.faq)
    }
  };

  const angularFireRemoteConfigStub = {};

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [FaqPage],
      imports: [
        IonicModule,
        CommonModule,
        RouterTestingModule,
        FaqPageRoutingModule],
      providers: [
        { provide: ContentService, useValue: mockContentService },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FaqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expand an item', () => {
    component.expandItem(0);
    expect(component).toBeTruthy();
  });
});
