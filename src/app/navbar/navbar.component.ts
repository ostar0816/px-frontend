import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pyxisAnimations } from '../../@pyxis/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: pyxisAnimations
})
export class NavbarComponent implements OnInit {
  public toggleStatus = false;

  menuItems: Object[];

  constructor(private router: Router) {
    this.menuItems = [
      { name: 'Home', path: '' },
      { name: 'About Us', path: 'about' },
      { name: 'Support', path: 'support' }
    ];

    this.menuItems.forEach( (item, index)=> {
      item['delay'] = index * 100 + 'ms';      
    });
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.toggleStatus = !this.toggleStatus;
  }

  collapse() {
    this.toggleStatus = false;
  }

}
