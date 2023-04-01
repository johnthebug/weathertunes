import { Component,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'wt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isDark: boolean = false;
  
  constructor(@Inject(DOCUMENT) private document:Document) {}

  toggleTheme() {
    if(!this.isDark){
     if(!this.document.body.classList.contains('dark')){
        this.document.body.classList.add('dark');
     }
     else{
      if(this.document.body.classList.contains('dark')){
        this.document.body.classList.remove('dark');
      }
     }
    }
  }

}
