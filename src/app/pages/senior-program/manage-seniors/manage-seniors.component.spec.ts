import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSeniorsComponent } from './manage-seniors.component';

describe('ManageSeniorsComponent', () => {
  let component: ManageSeniorsComponent;
  let fixture: ComponentFixture<ManageSeniorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSeniorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSeniorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
