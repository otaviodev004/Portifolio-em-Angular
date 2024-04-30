import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISkillsInterfaceTsComponent } from './iskills.interface.ts.component';

describe('ISkillsInterfaceTsComponent', () => {
  let component: ISkillsInterfaceTsComponent;
  let fixture: ComponentFixture<ISkillsInterfaceTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ISkillsInterfaceTsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ISkillsInterfaceTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
