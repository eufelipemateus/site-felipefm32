import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoPageComponent } from './curriculo-page.component';

describe('CurriculoPageComponent', () => {
  let component: CurriculoPageComponent;
  let fixture: ComponentFixture<CurriculoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
