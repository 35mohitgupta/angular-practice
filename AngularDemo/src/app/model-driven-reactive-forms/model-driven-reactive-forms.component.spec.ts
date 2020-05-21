import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenReactiveFormsComponent } from './model-driven-reactive-forms.component';

describe('ModelDrivenReactiveFormsComponent', () => {
  let component: ModelDrivenReactiveFormsComponent;
  let fixture: ComponentFixture<ModelDrivenReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDrivenReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
