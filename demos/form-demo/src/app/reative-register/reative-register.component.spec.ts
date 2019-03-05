import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeRegisterComponent } from './reative-register.component';

describe('ReativeRegisterComponent', () => {
  let component: ReativeRegisterComponent;
  let fixture: ComponentFixture<ReativeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReativeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
