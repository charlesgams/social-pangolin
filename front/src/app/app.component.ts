import { Component } from '@angular/core';
import { RequestService } from './services/request.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private request: RequestService, private auth: AuthService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');

    if(!token) 
      return

    this.request.setAuthorizationToken(token)
    this.auth.changeAuthState(true)
  }
}
