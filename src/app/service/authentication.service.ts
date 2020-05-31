import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  public authenticate(userName, password) {
    if (userName === 'admin' && password === 'password') {
      sessionStorage.setItem('userName', userName);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('userName');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('userName');
  }
}
