import { Component, OnInit } from '@angular/core';
import { pyxisAnimations } from '../../../@pyxis/animations';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { GlobalState } from '../../service/global.state';

@Component({
  selector: 'app-banner-search',
  templateUrl: './banner-search.component.html',
  styleUrls: ['./banner-search.component.scss'],
  animations: pyxisAnimations
})
export class BannerSearchComponent implements OnInit {
  constructor(private router: Router, private _state: GlobalState) { }

  ngOnInit() {
  }

  onSubmit(keyword) {    
    this._state.notifyDataChanged('banner.search.changed', keyword);
    
    this.router.navigate(['/question/' + keyword]);
  }
}
