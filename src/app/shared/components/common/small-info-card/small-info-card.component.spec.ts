import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmallInfoCardComponent } from './small-info-card.component';

describe('SmallInfoCardComponent', () => {
  let component: SmallInfoCardComponent;
  let fixture: ComponentFixture<SmallInfoCardComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [SmallInfoCardComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmallInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click', () => {
    component.onClick();
    expect(component).toBeTruthy();
  });
});
