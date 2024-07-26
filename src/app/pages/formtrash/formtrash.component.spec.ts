import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtrashComponent } from './formtrash.component';

describe('FormtrashComponent', () => {
  let component: FormtrashComponent;
  let fixture: ComponentFixture<FormtrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormtrashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormtrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
