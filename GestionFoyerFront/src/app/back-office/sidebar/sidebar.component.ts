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
  user: User | null = null;
  constructor(private authService: AuthServiceService, private router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/front/home']);
  }

  ngOnInit() {
    this.getUserInfo();
  }

  private getUserInfo() {
    const storedUser = localStorage.getItem('user');
    this.user = storedUser ? JSON.parse(storedUser) : null;
    console.log('Retrieved User:', this.user);
  }
}
