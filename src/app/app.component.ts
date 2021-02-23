import { Component, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Meus estudos em Inteligência Artificial';


  constructor(public router: Router, public elRef: ElementRef) {
    
    this.router.events.subscribe(event => {
      
      if (event instanceof NavigationEnd) {
      
        if (event.url === "/introducao") {
          
          this.elRef.nativeElement.classList.remove('template-com-menu');          
          this.elRef.nativeElement.classList.add('template-sem-menu');
      
        } else {
  
          this.elRef.nativeElement.classList.remove('template-sem-menu');          
          this.elRef.nativeElement.classList.add('template-com-menu');
      
        }
      
      }
    
    });
  
  }
  
}
