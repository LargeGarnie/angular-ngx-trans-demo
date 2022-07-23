import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithIdComponent } from './with-id.component';

describe('WithIdComponent', () => {
  let component: WithIdComponent;
  let fixture: ComponentFixture<WithIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
