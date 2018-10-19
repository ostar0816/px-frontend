import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVisionComponent } from './section-vision.component';

describe('SectionVisionComponent', () => {
  let component: SectionVisionComponent;
  let fixture: ComponentFixture<SectionVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionVisionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
