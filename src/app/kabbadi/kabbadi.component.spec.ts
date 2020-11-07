import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabbadiComponent } from './kabbadi.component';

describe('KabbadiComponent', () => {
  let component: KabbadiComponent;
  let fixture: ComponentFixture<KabbadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabbadiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KabbadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
