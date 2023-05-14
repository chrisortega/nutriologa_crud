import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevacitaComponent } from './nuevacita.component';

describe('NuevacitaComponent', () => {
  let component: NuevacitaComponent;
  let fixture: ComponentFixture<NuevacitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevacitaComponent]
    });
    fixture = TestBed.createComponent(NuevacitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
