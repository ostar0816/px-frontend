import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSubscribeComponent } from './section-subscribe.component';

describe('SectionSubscribeComponent', () => {
  let component: SectionSubscribeComponent;
  let fixture: ComponentFixture<SectionSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSubscribeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
