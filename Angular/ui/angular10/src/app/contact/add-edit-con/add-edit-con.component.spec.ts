import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditConComponent } from './add-edit-con.component';

describe('AddEditConComponent', () => {
  let component: AddEditConComponent;
  let fixture: ComponentFixture<AddEditConComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditConComponent]
    });
    fixture = TestBed.createComponent(AddEditConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
