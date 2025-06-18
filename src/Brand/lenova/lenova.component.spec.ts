import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenovaComponent } from './lenova.component';

describe('LenovaComponent', () => {
  let component: LenovaComponent;
  let fixture: ComponentFixture<LenovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LenovaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
