import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'costa-client';
  showLogo:Boolean = true;
  
  constructor(private router: Router  ) { }


  ngOnInit() {
    this.router.events.subscribe( (e) => {
      debugger;
      if (e instanceof NavigationStart) {
        if (e.url === '/') {
          this.showLogo = true;
        } else {
          this.showLogo = false;
        }
      }
    });
    }
}
