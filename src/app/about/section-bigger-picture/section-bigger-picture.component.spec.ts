import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBiggerPictureComponent } from './section-bigger-picture.component';

describe('SectionBiggerPictureComponent', () => {
  let component: SectionBiggerPictureComponent;
  let fixture: ComponentFixture<SectionBiggerPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionBiggerPictureComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBiggerPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
