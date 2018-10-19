import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { pyxisAnimations } from '../../../@pyxis/animations';

@Component({
  selector: 'app-section-demystify',
  templateUrl: './section-demystify.component.html',
  styleUrls: ['./section-demystify.component.scss'],
  animations: pyxisAnimations
})
export class SectionDemystifyComponent implements OnInit {
  state = 'hide';  

  constructor(public el: ElementRef) {     
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
    window.scrollTo(0, 1);
  }
}
