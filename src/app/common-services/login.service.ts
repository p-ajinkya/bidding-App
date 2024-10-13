import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const mainUrl = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  allUsers: any = [];
  constructor( private httpClient: HttpClient ) { }
  bidderPermissions = [
    'Place_Bid'
  ]
  login(){
    return this.httpClient.get(`${mainUrl}/signUpUsers`);
  }

  checkLoggedIn(){
    if(localStorage.getItem('user')){
      return true;
    }
    return false;
  }

  getLoggedUserDetails(){
    localStorage.getItem('user');
    let str: any = localStorage.getItem('user');
    return JSON.parse(str);
  }

  public checkAccessPermission(permissionToCheck): boolean | any{
    let user = this.getLoggedUserDetails();
    if(user.role == 'seller'){

    }
    if(user.role == 'bidder'){
      if(this.bidderPermissions.includes(permissionToCheck)){
        return true;
      }else{
        return false;
      }
    }
  }

  getSingleUserDetails(id){
    return this.httpClient.get(`${mainUrl}/signUpUsers?id=${id}`);
  }

  getUserNameById(){
    return this
    // let UsersArr: any = localStorage.getItem('allusers');
    // UsersArr = JSON.parse(UsersArr);
    // return UsersArr;
  }
}
