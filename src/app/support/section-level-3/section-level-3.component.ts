import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SupportService } from '../../service/support.service';
import { Intercom } from 'ng-intercom';
import { pyxisAnimations } from '../../../@pyxis/animations';

import * as moment from 'moment';

@Component({
  selector: 'app-section-level-3',
  templateUrl: './section-level-3.component.html',
  styleUrls: ['./section-level-3.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: pyxisAnimations
})
export class SectionLevel3Component implements OnInit, OnDestroy {

  public category;
  public article;
  public categoryId: string;
  public categoryTitle: string;
  public articleId: string;
  public articleTitle: string;
  public articleContent: SafeHtml;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public supportService: SupportService, public intercom: Intercom, private sanitizer: DomSanitizer) {
    this.categoryId = this.activatedRoute.snapshot.params.categoryId;
    this.categoryTitle = this.activatedRoute.snapshot.params.categoryTitle;
    this.articleId = this.activatedRoute.snapshot.params.articleId;
    this.articleTitle = this.activatedRoute.snapshot.params.articleTitle;

    this.activatedRoute.data.subscribe(res => {
      this.article = res['data']['data'];
      this.article.updatedAt = moment(this.article.updatedAt, "YYYYMMDD").fromNow();
      this.articleContent = this.sanitizer.bypassSecurityTrustHtml(this.article.content);
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
