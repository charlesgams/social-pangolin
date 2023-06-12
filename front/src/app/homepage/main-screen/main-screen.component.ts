import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FriendService } from 'src/app/services/friend.service';


@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {
  constructor(private request: RequestService, public friend: FriendService) { }

  showModal: boolean = false

  ngOnInit() {
    this.friend.getUsers()
  }

  toggleModdal() {
    this.showModal = !this.showModal
  }

  addFriend(friendId: any) {
    this.friend.addFriend(friendId)
  }

  removeFriend(friendId: any) {
    this.friend.removeFriend(friendId)
  }
}
