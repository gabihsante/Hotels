import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsListComponent } from './hotels-list.component';

describe('HotelsLitComponent', () => {
  let component: HotelsListComponent;
  let fixture: ComponentFixture<HotelsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelsListComponent]
    });
    fixture = TestBed.createComponent(HotelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
