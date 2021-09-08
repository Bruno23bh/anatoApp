import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendarButtonComponent } from './calendar-button.component';

describe('CalendarButtonComponent', () => {
  let component: CalendarButtonComponent;
  let fixture: ComponentFixture<CalendarButtonComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [CalendarButtonComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create without the start time', () => {
    component.start = '';
    // fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should open the selected option', () => {
    const mockedEvent = {
      detail: {
        value: 'google'
      }
    };
    component.calendarOptionSelected(mockedEvent);
    expect(component).toBeTruthy();
  });
});
