import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDemystifyComponent } from './section-demystify.component';

describe('SectionDemystifyComponent', () => {
  let component: SectionDemystifyComponent;
  let fixture: ComponentFixture<SectionDemystifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionDemystifyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDemystifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
