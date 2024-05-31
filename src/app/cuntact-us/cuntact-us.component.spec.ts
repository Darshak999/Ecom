import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuntactUsComponent } from './cuntact-us.component';

describe('CuntactUsComponent', () => {
  let component: CuntactUsComponent;
  let fixture: ComponentFixture<CuntactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuntactUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuntactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
