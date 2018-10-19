import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pyxisAnimations } from '../../../@pyxis/animations';

@Component({
  selector: 'app-banner-about-us',
  templateUrl: './banner-about-us.component.html',
  styleUrls: ['./banner-about-us.component.scss'],
  animations: pyxisAnimations
})
export class BannerAboutUsComponent implements OnInit {
  
  title: string
  description: string;

  constructor(private router: Router) {
    switch (this.router.url) {
      case '/about': {
        this.title = 'About Us';
        this.description = 'Get to know Pyxis and the people behind it';

        break;
      }

      case '/terms-and-conditions': {
        this.title = 'Terms and Conditions';
        this.description = 'Last revised on April 13th 2018';

        break;
      }

      case '/privacy-policy': {
        this.title = 'Privacy Policy';
        this.description = 'Last revised on April 13th 2018';

        break;
      }
    }    
  }

  ngOnInit() {    
  }

}
