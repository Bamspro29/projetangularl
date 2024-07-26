import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetloginComponent } from './forgetlogin.component';

describe('ForgetloginComponent', () => {
  let component: ForgetloginComponent;
  let fixture: ComponentFixture<ForgetloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgetloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
