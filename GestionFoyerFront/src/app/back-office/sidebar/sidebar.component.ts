import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/authentification/auth-service.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  user!: User;
  constructor(private authService: AuthServiceService, private router: Router) { }

  logout(): void {
    this.authService.logout();
  }

  ngOnInit() {
    const userString = localStorage.getItem('user');

    if (userString) {
      this.user = JSON.parse(userString);
      console.log('Retrieved User:', this.user);
    }
  }

}
