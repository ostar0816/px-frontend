import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLevel1Component } from './section-level-1.component';

describe('SectionLevel1Component', () => {
  let component: SectionLevel1Component;
  let fixture: ComponentFixture<SectionLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionLevel1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
