import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundExceptionPageComponent } from './not-found-exception-page.component';

describe('NotFoundExceptionPageComponent', () => {
  let component: NotFoundExceptionPageComponent;
  let fixture: ComponentFixture<NotFoundExceptionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundExceptionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundExceptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
