import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowConComponent } from './show-con.component';

describe('ShowConComponent', () => {
  let component: ShowConComponent;
  let fixture: ComponentFixture<ShowConComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowConComponent]
    });
    fixture = TestBed.createComponent(ShowConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
