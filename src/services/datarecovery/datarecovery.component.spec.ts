import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatarecoveryComponent } from './datarecovery.component';

describe('DatarecoveryComponent', () => {
  let component: DatarecoveryComponent;
  let fixture: ComponentFixture<DatarecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatarecoveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatarecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
