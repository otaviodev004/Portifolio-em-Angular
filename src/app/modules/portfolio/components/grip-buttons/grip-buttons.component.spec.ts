import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GripButtonsComponent } from './grip-buttons.component';

describe('GripButtonsComponent', () => {
  let component: GripButtonsComponent;
  let fixture: ComponentFixture<GripButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GripButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GripButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
