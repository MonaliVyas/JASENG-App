import { Component, HostListener } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'jas-billing-app';
  constructor(public router: Router) {}

  public isCollapsed = false;

  public innerWidth: number=-1;
  public defaultSidebar: string='';
  public showMobileMenu = false;
  public expandLogo = false;

  options = {
    sidebartype: 'full',
  };

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  // ngOnInit() {
  //   if (this.router.url === '/') {
  //     this.router.navigate(['/dashboard/dashboard1']);
  //   }
  //   this.defaultSidebar = this.options.sidebartype;
  //   this.handleSidebar();
  // }

  @HostListener('window:resize', ['$event'])
  onResize(event:string) {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    switch (this.defaultSidebar) {
      case 'full':
        if (this.innerWidth < 1170) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;
      default:
    }
  }

}
