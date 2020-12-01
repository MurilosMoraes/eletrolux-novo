import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  home(){
    this.router.navigate(['home'], { replaceUrl: true })
  }

  justification(){
    this.router.navigate(['justification'], { replaceUrl: true })
  }

  questionnaire(){
    this.router.navigate(['questionnaire'], { replaceUrl: true })
  }

  ngOnInit() {
  }

}
