import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLevel3Component } from './section-level-3.component';

describe('SectionLevel3Component', () => {
  let component: SectionLevel3Component;
  let fixture: ComponentFixture<SectionLevel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionLevel3Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
