import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarchiveComponent } from './formarchive.component';

describe('FormarchiveComponent', () => {
  let component: FormarchiveComponent;
  let fixture: ComponentFixture<FormarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormarchiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
