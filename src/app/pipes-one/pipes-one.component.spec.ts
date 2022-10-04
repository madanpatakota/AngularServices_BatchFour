import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesOneComponent } from './pipes-one.component';

describe('PipesOneComponent', () => {
  let component: PipesOneComponent;
  let fixture: ComponentFixture<PipesOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
