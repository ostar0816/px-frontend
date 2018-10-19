import { Component, OnInit } from '@angular/core';
import { pyxisAnimations } from '../../../@pyxis/animations';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.scss'],
  animations: pyxisAnimations
})
export class BannerHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
