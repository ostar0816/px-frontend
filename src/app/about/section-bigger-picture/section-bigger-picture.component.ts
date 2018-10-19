import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { pyxisAnimations } from '../../../@pyxis/animations';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-section-bigger-picture',
  templateUrl: './section-bigger-picture.component.html',
  styleUrls: ['../about.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: pyxisAnimations
})
export class SectionBiggerPictureComponent implements OnInit {
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
