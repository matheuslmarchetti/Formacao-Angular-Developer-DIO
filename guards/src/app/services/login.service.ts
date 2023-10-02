import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(){
    localStorage.setItem('token', 'abcd123abcd')
  }

  doLogout(){
    localStorage.clear()
  }
}
