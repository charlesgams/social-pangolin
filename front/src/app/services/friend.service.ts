import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { remove } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private request: RequestService) { }

  _users: Array<any> = []
  _friends: Array<any> = []

  getUsers() {
    this.request.get('/friends/get-users')
      .subscribe((result: any) => this._users = result);

    this.refreshFriend()
  }

  refreshFriend() {
    this.request.get('/users/get-friends')
      .subscribe((result: any) => this._friends = result)
  }

  addFriend(friendId: any) {
    this.request.post('/friends/add-friend', {friendId})
      .subscribe((result: any) => {
        const el = remove(this._users, (user: any) => user._id === friendId)
        this.friends.push(el[0])
      });
  }

  removeFriend(friendId: any) {
    this.request.put('/friends/remove-friend', {friendId})
      .subscribe((result: any) => {
        const el = remove(this.friends, (user: any) => user._id === friendId)
        this._users.push(el[0])
      });
  }

  get users() {
    return this._users
  }

  get friends() {
    return this._friends
  }

}
