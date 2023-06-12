import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { ToastService } from './toast.service';
import { FriendService } from './friend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private request: RequestService, private toast: ToastService, private friend: FriendService) { }

  isLogin: boolean = false
  userInfo: any = {}

  changeAuthState(state: boolean) {
    this.isLogin = state

    if(state) {
      this.request.get('/users').subscribe((response: any) => {
        this.userInfo = response
      })
    }
  }

  onLogin(values: any) {
    this.request.post('/login', values).subscribe((response: any) => {
      this.request.setAuthorizationToken(response.token)
      localStorage.setItem("token", response.token)
      this.changeAuthState(true)
    })
  }

  onRegister(values: any) {
    this.request.post('/register', values).subscribe((response: any) => {
      this.toast.show('Inscription réussie !', 'success')
    })
  }

  onRegisterExtern(values: any) {
    this.request.post('/friends/register-extern', values).subscribe((response: any) => {
      this.friend.refreshFriend()
      this.toast.show('Inscription réussie ! Utilisateur ajouter', 'success')
    })
  }

  onDisconnect() {
    this.request.setAuthorizationToken(null)
    localStorage.removeItem("token")
    this.changeAuthState(false)
  }
}
