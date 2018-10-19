import { NgModule } from '@angular/core';
import { Routes, RouterModule, LoadChildren } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SectionLevel1Component } from './support/section-level-1/section-level-1.component';
import { SectionLevel2Component } from './support/section-level-2/section-level-2.component';
import { SectionLevel3Component } from './support/section-level-3/section-level-3.component';
import { SectionSearchResultComponent } from './support/section-search-result/section-search-result.component';
import { TermsAndConditionsComponent } from './legal/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';
import { SupportService } from './service/support.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'support',
    component: SectionLevel1Component,
    resolve: {
      data: SupportService
    }
  },
  {
    path: 'support/:categoryId/:categoryTitle',
    component: SectionLevel2Component,
    resolve: {
      data: SupportService
    }
  },
  {
    path: 'support/:categoryId/:categoryTitle/:articleId/:articleTitle',
    component: SectionLevel3Component,
    resolve: {
      data: SupportService
    }
  },
  {
    path: 'question/:keyword',
    component: SectionSearchResultComponent,
    resolve: {
      data: SupportService
    }
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SupportService
  ]
})
export class AppRoutingModule { }
