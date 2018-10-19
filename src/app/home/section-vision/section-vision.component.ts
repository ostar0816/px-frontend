import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { pyxisAnimations } from '../../../@pyxis/animations';

@Component({
  selector: 'app-section-vision',
  templateUrl: './section-vision.component.html',
  styleUrls: ['./section-vision.component.scss'],
  animations: pyxisAnimations
})
export class SectionVisionComponent implements OnInit {
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
  }
}
