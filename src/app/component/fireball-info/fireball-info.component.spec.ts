import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireballInfoComponent } from './fireball-info.component';

describe('FireballInfoComponent', () => {
  let component: FireballInfoComponent;
  let fixture: ComponentFixture<FireballInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireballInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireballInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
