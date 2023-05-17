import { Component } from '@angular/core';
import { remove } from 'lodash';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {
  constructor(private request: RequestService) { }

  users: Array<any> = []
  friends: Array<any> = []

  ngOnInit() {
    this.request.get('/friends/get-users')
      .subscribe((result: any) => this.users = result);

    this.request.get('/users/get-friends')
      .subscribe((result: any) => this.friends = result);
  }

  addFriend(friendId: any) {
    this.request.post('/friends/add-friend', {friendId})
      .subscribe((result: any) => {
        const el = remove(this.users, (user: any) => user._id === friendId)
        this.friends.push(el[0])
      });
  }

  removeFriend(friendId: any) {
    this.request.put('/friends/remove-friend', {friendId})
      .subscribe((result: any) => {
        const el = remove(this.friends, (user: any) => user._id === friendId)
        this.users.push(el[0])
      });
  }
}
