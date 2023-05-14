import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallescitaComponent } from './detallescita.component';

describe('DetallescitaComponent', () => {
  let component: DetallescitaComponent;
  let fixture: ComponentFixture<DetallescitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallescitaComponent]
    });
    fixture = TestBed.createComponent(DetallescitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
