import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { pyxisAnimations } from '../../../@pyxis/animations';

@Component({
  selector: 'app-section-subscribe',
  templateUrl: './section-subscribe.component.html',
  styleUrls: ['./section-subscribe.component.scss'],
  animations: pyxisAnimations
})
export class SectionSubscribeComponent implements OnInit {
  public signupResult;
  state = 'hide';  

  constructor(
    private router: Router,
    public el: ElementRef
  ) {
    this.signupResult = '';
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

  onSubmit(email) {
    fetch('http://localhost:10010/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email})
    })
      .then(res => res.json())
      .then((response) => {
        this.signupResult = response.result.message;
      });
    this.router.navigate(['']);
  }
}
