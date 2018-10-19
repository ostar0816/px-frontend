import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SupportService } from '../../service/support.service';
import { Intercom } from 'ng-intercom';
import { pyxisAnimations } from '../../../@pyxis/animations';

@Component({
  selector: 'app-section-level-1',
  templateUrl: './section-level-1.component.html',
  styleUrls: ['./section-level-1.component.scss'],
  animations: pyxisAnimations
})
export class SectionLevel1Component implements OnInit, OnDestroy {

  public categories = [{ mark: '', title: '', description: '' }];

  constructor(private route: ActivatedRoute, private router: Router, private supportService: SupportService, public intercom: Intercom) {
    this.route.data.subscribe(res => {
      this.categories = res['data']['data'];
    });
  }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.intercom.l();
    this.intercom.boot();
  }

  ngOnDestroy() {
    this.intercom.shutdown();
  }
}
