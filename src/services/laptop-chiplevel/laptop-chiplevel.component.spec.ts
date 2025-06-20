import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopChiplevelComponent } from './laptop-chiplevel.component';

describe('LaptopChiplevelComponent', () => {
  let component: LaptopChiplevelComponent;
  let fixture: ComponentFixture<LaptopChiplevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopChiplevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopChiplevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
