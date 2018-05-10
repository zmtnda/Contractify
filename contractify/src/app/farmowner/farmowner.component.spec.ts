import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmownerComponent } from './farmowner.component';

describe('FarmownerComponent', () => {
  let component: FarmownerComponent;
  let fixture: ComponentFixture<FarmownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
