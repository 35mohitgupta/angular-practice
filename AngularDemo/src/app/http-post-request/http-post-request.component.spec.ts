import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostRequestComponent } from './http-post-request.component';

describe('HttpPostRequestComponent', () => {
  let component: HttpPostRequestComponent;
  let fixture: ComponentFixture<HttpPostRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPostRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPostRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
