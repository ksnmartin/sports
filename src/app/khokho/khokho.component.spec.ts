import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhokhoComponent } from './khokho.component';

describe('KhokhoComponent', () => {
  let component: KhokhoComponent;
  let fixture: ComponentFixture<KhokhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhokhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhokhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
