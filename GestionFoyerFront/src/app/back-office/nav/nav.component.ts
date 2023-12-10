import { Component, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserListServiceService } from '../user/user-list/user-list-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router: Router) { }

  onCreateButtonClick(): void {
    if (this.router.url === '/back/user/list') {
      console.log('Create user logic goes here');
      this.router.navigate(['/back/user/list'], { queryParams: { showAddColumnButton: 'true' } });
    }
  }
}
