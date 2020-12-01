import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preliminary',
  templateUrl: './preliminary.page.html',
  styleUrls: ['./preliminary.page.scss'],
})
export class PreliminaryPage implements OnInit {



  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  next(){
    this.router.navigate(['justification'], { replaceUrl: true })
  }

}
