import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common-services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  loggedInUser: any;

  ngOnInit(): void {
    this.loggedInUser = this.loginService.getLoggedUserDetails();
  }

}
