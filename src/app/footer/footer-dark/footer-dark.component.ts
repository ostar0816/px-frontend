import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { pyxisAnimations } from '../../../@pyxis/animations';

@Component({
  selector: 'app-footer-dark',
  templateUrl: './footer-dark.component.html',
  styleUrls: ['./footer-dark.component.scss'],
  animations: pyxisAnimations
})
export class FooterDarkComponent implements OnInit {
  
  menus: Object[];
  state = 'hide';  

  constructor(
    private router: Router,
    public el: ElementRef
  ) {
    this.menus = [
      {
        title: 'COMPANY',
        duration: '500ms',
        delay: '100ms',
        items: [
          { name: 'About us', path: ['', 'about'], duration: '500ms', delay: '400ms' },
          { name: 'Jobs', path: [''], duration: '500ms', delay: '600ms' }
        ]
      },
      {
        title: 'LEGAL',
        duration: '500ms',
        delay: '300ms',
        items: [
          { name: 'Terms of use', path: ['', 'terms-and-conditions'], duration: '500ms', delay: '600ms' },
          { name: 'Privacy policy', path: ['', 'privacy-policy'], duration: '500ms', delay: '800ms' }
        ]
      },
      {
        title: 'SUPPORT',
        duration: '500ms',
        delay: '500ms',
        items: [
          { name: "FAQ's", path: ['', 'support'], duration: '500ms', delay: '800ms' }        
        ]
      }
    ];
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    const browserHeight = window.innerHeight;

    if (scrollPosition >= (componentPosition - browserHeight + 80 + 70)) {
      this.state = 'show';
    }
  }

  ngOnInit() {
  }
}
