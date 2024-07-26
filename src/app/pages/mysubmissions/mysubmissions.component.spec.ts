import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysubmissionsComponent } from './mysubmissions.component';

describe('MysubmissionsComponent', () => {
  let component: MysubmissionsComponent;
  let fixture: ComponentFixture<MysubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MysubmissionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
