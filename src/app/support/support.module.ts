import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BannerModule } from '../banner/banner.module';
import { FooterModule } from '../footer/footer.module';

import { SectionLevel1Component } from './section-level-1/section-level-1.component';
import { SectionLevel2Component } from './section-level-2/section-level-2.component';
import { SectionLevel3Component } from './section-level-3/section-level-3.component';
import { SectionSearchResultComponent } from './section-search-result/section-search-result.component';

import { SupportService } from '../service/support.service';

@NgModule({
  imports: [
    CommonModule,
    BannerModule,
    FooterModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
  ],
  declarations: [
    SectionLevel1Component,
    SectionLevel2Component,
    SectionLevel3Component,
    SectionSearchResultComponent    
  ],
  exports: [
    SectionLevel1Component,
    SectionLevel2Component,
    SectionLevel3Component
  ],
  providers: [
    SupportService    
  ]
})
export class SupportModule { }
