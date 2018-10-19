import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SupportService } from '../../service/support.service';
import { Intercom } from 'ng-intercom';
import { pyxisAnimations } from '../../../@pyxis/animations';

import * as moment from 'moment';

@Component({
  selector: 'app-section-level-2',
  templateUrl: './section-level-2.component.html',
  styleUrls: ['./section-level-2.component.scss'],
  animations: pyxisAnimations
})
export class SectionLevel2Component implements OnInit, OnDestroy {

  public category: any;
  public articles: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private supportService: SupportService, public intercom: Intercom) {
    this.activatedRoute.data.subscribe(res => {
      this.category = res['data']['data']['category'];
      this.articles = res['data']['data']['articles'];

      this.articles.forEach(article => {
        article.updatedAt = moment(article.updatedAt, "YYYYMMDD").fromNow();
      });
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
