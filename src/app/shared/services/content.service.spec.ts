import { TestBed } from '@angular/core/testing';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { of } from 'rxjs';

import { content } from '../constants/content.constant';
import { ContentService } from './content.service';

// FIXME: We need to fix theses tests
describe('ContentService', () => {
  let contentService: ContentService;

  const parametersSpy = jasmine.createSpyObj({
    subscribe: () => of(content)
  });

  const angularFireRemoteConfigStub = {
    parameters: parametersSpy,
  };

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    TestBed.configureTestingModule({
      providers: [
        ContentService,
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
      ]
    }),
      contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    const service: ContentService = TestBed.inject(ContentService);
    expect(service).toBeTruthy();
  });

  // it('should update the content', () => {
  //   const service: ContentService = TestBed.inject(ContentService);
  //   // const angularFireRemoteConfig = TestBed.inject(AngularFireRemoteConfig);
  //   // spyOn(angularFireRemoteConfig, 'parameters').and.returnValue(content);
  //   service.updateContent();
  //   expect(service.contents.caso).toEqual(null);
  // });

  // it('should have an error when updating the content', () => {
  //   const service: ContentService = TestBed.inject(ContentService);
  //   const angularFireRemoteConfig = TestBed.inject(AngularFireRemoteConfig);
  //   // spyOn(angularFireRemoteConfig, 'parameters').and.returnValue(throwError(new Error('Test error')));
  //   service.updateContent();
  //   // expect(toastService.presentErrorToast).toHaveBeenCalled();
  //   expect(service).toBeTruthy();
  // });
});
