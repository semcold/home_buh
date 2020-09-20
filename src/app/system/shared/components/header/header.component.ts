import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bus-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  time=new Date();

  // date: Date = Date.now();
  user: User;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    setInterval(() => {this.time = new Date();}, 60000);
    
    this.user = JSON.parse(window.localStorage.getItem('user'));

  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
