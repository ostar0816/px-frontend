import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAboutUsComponent } from './banner-about-us.component';

describe('BannerAboutUsComponent', () => {
  let component: BannerAboutUsComponent;
  let fixture: ComponentFixture<BannerAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
