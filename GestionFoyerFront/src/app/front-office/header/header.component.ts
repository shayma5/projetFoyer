import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/authentification/auth-service.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.scss']
})
export class HeaderComponent implements OnInit {
  user!: User;
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    const userString = localStorage.getItem('user');

    if (userString) {
      this.user = JSON.parse(userString);
      console.log('Retrieved User:', this.user);
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
  }
}
