import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaGradeComponent } from './coluna-grade.component';

describe('ColunaGradeComponent', () => {
  let component: ColunaGradeComponent;
  let fixture: ComponentFixture<ColunaGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColunaGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColunaGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
