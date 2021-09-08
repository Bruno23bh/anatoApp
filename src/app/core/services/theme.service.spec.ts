import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  // eslint-disable-next-line prefer-const
  let themeService: ThemeService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeService = TestBed.inject(ThemeService);
    expect(service).toBeTruthy();
  });

  it('should enable light theme', () => {
    const service: ThemeService = TestBed.inject(ThemeService);
    service.enableLight();
    expect(service).toBeTruthy();
  });

  it('should enable dark theme', () => {
    const service: ThemeService = TestBed.inject(ThemeService);
    service.enableDark();
    expect(service).toBeTruthy();
  });

});
