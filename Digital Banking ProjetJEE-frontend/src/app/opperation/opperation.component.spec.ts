import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpperationComponent } from './opperation.component';

describe('OpperationComponent', () => {
  let component: OpperationComponent;
  let fixture: ComponentFixture<OpperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpperationComponent]
    });
    fixture = TestBed.createComponent(OpperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
