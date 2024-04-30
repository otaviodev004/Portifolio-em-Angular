import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsTestComponent } from './btns-test.component';

describe('BtnsTestComponent', () => {
  let component: BtnsTestComponent;
  let fixture: ComponentFixture<BtnsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnsTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
