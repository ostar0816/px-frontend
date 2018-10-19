import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLevel2Component } from './section-level-2.component';

describe('SectionLevel2Component', () => {
  let component: SectionLevel2Component;
  let fixture: ComponentFixture<SectionLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionLevel2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
