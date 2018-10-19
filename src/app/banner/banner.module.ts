import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { BannerAboutUsComponent } from './banner-about-us/banner-about-us.component';
import { BannerSearchComponent } from './banner-search/banner-search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    BannerHomeComponent,
    BannerAboutUsComponent,
    BannerSearchComponent
  ],
  exports: [
    BannerHomeComponent,
    BannerAboutUsComponent,
    BannerSearchComponent
  ]
})
export class BannerModule { }
