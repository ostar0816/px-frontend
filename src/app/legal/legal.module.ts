import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BannerModule } from '../banner/banner.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BannerModule,
    FooterModule
  ],
  declarations: [TermsAndConditionsComponent, PrivacyPolicyComponent]
})
export class LegalModule { }
