import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
  ) {}

  new(){
    this.router.navigate(['preliminary'], { replaceUrl: true })
  }

  backup(){
    alert("Backup em progresso, você será avisado quando for concluído.")
  }

  menu(){
    this.router.navigate(['menu'], { replaceUrl: true })
  }

}
