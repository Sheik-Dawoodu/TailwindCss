import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailWindStyleComponent } from './tail-wind-style.component';

describe('TailWindStyleComponent', () => {
  let component: TailWindStyleComponent;
  let fixture: ComponentFixture<TailWindStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TailWindStyleComponent]
    });
    fixture = TestBed.createComponent(TailWindStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
