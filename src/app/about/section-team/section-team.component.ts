import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { pyxisAnimations } from '../../../@pyxis/animations';
import { ViewEncapsulation } from '@angular/core';
import { AboutService } from '../../service/about.service';

@Component({
  selector: 'app-section-team',
  templateUrl: './section-team.component.html',
  styleUrls: ['../about.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: pyxisAnimations
})
export class SectionTeamComponent implements OnInit {
  state = 'hide';
  public teamMembers: any;

  constructor(
    public el: ElementRef,
    private aboutService: AboutService
  ) {
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
    this.aboutService.getTeamMembers().subscribe(res => {
      this.teamMembers = res['data'];

      this.teamMembers.forEach(element => {
        element.duration = '500ms';
        element.delay = Math.floor(Math.random() * (1000 - 100)) + 100 + 'ms';
      });
    });
  }
}
