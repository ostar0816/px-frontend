import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { BannerModule } from '../banner/banner.module';
import { SectionDemystifyComponent } from './section-demystify/section-demystify.component';
import { SectionPrivateSecureComponent } from './section-private-secure/section-private-secure.component';
import { SectionVisionComponent } from './section-vision/section-vision.component';
import { SectionTeamComponent } from './section-team/section-team.component';
import { SectionSubscribeComponent } from './section-subscribe/section-subscribe.component';
import { FooterModule } from '../footer/footer.module';
import { SupportService } from '../service/support.service';

@NgModule({
  imports: [
    CommonModule,
    BannerModule,
    FooterModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    SectionDemystifyComponent,
    SectionPrivateSecureComponent,
    SectionVisionComponent,
    SectionTeamComponent,
    SectionSubscribeComponent
  ],
  exports: [
    SectionDemystifyComponent,
    SectionPrivateSecureComponent,
    SectionVisionComponent,
    SectionTeamComponent,
    SectionSubscribeComponent
  ],
  providers: [
    SupportService
  ]
})
export class HomeModule { }
