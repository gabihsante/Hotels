import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHotelComponent } from './select-hotel.component';

describe('SelectHotelComponent', () => {
  let component: SelectHotelComponent;
  let fixture: ComponentFixture<SelectHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectHotelComponent]
    });
    fixture = TestBed.createComponent(SelectHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
