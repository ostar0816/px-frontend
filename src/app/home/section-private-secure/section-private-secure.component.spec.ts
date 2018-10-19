import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPrivateSecureComponent } from './section-private-secure.component';

describe('SectionPrivateSecureComponent', () => {
  let component: SectionPrivateSecureComponent;
  let fixture: ComponentFixture<SectionPrivateSecureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPrivateSecureComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPrivateSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
