import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-justification',
  templateUrl: './justification.page.html',
  styleUrls: ['./justification.page.scss'],
})
export class JustificationPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  menu(){
    this.router.navigate(['menu'], { replaceUrl: true })
  }

  next(){
    this.router.navigate(['questionnaire'], { replaceUrl: true })
  }

}
