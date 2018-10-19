import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerModule } from '../banner/banner.module';
import { AboutComponent } from './about.component';
import { SectionBiggerPictureComponent } from './section-bigger-picture/section-bigger-picture.component';
import { SectionTeamComponent } from './section-team/section-team.component';
import { SectionJobComponent } from './section-job/section-job.component';
import { FooterModule } from '../footer/footer.module';
import { AboutService } from '../service/about.service';

@NgModule({
  imports: [
    CommonModule,
    BannerModule,
    FooterModule
  ],
  declarations: [
    AboutComponent,
    SectionBiggerPictureComponent,
    SectionTeamComponent,
    SectionJobComponent
  ],
  exports: [
    SectionBiggerPictureComponent,
    SectionTeamComponent,
    SectionJobComponent
  ],
  providers: [
    AboutService
  ]
})
export class AboutModule { }
