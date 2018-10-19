import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { GlobalState } from '../../service/global.state';
import { SupportService } from '../../service/support.service';
import { pyxisAnimations } from '../../../@pyxis/animations';

import * as moment from 'moment';

@Component({
  selector: 'app-section-search-result',
  templateUrl: './section-search-result.component.html',
  styleUrls: ['../section-level-1/section-level-1.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: pyxisAnimations
})
export class SectionSearchResultComponent implements OnInit, OnDestroy {

  public articles;
  public question;
  private events: Array<any> = [];


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _state: GlobalState, private supportService: SupportService) {
    this.question = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path;

    this.activatedRoute.data.subscribe(res => {
      this.articles = res['data']['data'];

      this.articles.forEach(article => {
        article.updatedAt = moment(article.updatedAt, "YYYYMMDD").fromNow();
      });
    });
  }

  ngOnInit() {
    this.events.push(this._state.subscribe('banner.search.changed', (keyword) => {
      this.question = keyword;

      this.supportService.searchArticles(this.question).subscribe(res => {
        this.articles = res['data'];
      });
    }));

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  ngOnDestroy() {
    for (let i = 0; i < this.events.length; i++) {
      this._state.unsubscribe(this.events[i].event, this.events[i].callback);
    }
    this.events = [];
  }
}
