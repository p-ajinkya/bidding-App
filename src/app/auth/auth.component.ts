import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common-services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
