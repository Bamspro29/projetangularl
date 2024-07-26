import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesformsComponent } from './mesforms.component';

describe('MesformsComponent', () => {
  let component: MesformsComponent;
  let fixture: ComponentFixture<MesformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
