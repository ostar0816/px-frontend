import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { FooterLightComponent } from './footer-light/footer-light.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterDarkComponent,
    FooterLightComponent
  ],
  exports: [
    FooterDarkComponent,
    FooterLightComponent
  ]
})
export class FooterModule { }
