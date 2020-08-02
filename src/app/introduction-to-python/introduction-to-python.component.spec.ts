import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToPythonComponent } from './introduction-to-python.component';

describe('IntroductionToPythonComponent', () => {
  let component: IntroductionToPythonComponent;
  let fixture: ComponentFixture<IntroductionToPythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionToPythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionToPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
