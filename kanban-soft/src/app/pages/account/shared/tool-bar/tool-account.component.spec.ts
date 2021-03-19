import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBarComponent } from './tool-account.component';

describe('ToolBarComponent', () => {
  let component: AccountBarComponent;
  let fixture: ComponentFixture<AccountBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
