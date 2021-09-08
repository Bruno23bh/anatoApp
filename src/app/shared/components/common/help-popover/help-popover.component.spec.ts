import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpPopoverComponent } from './help-popover.component';

describe('HelpPopoverComponent', () => {
  let component: HelpPopoverComponent;
  let fixture: ComponentFixture<HelpPopoverComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [HelpPopoverComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
