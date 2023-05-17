import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private auth: AuthService, private router: Router, private request: RequestService) {}

  ngOnInit() {
    if(!this.auth.isLogin)
      this.router.navigate(['/'])
  }

  roleForm = new FormGroup({
    role: new FormControl(this.auth.userInfo.role)
  });

  onSubmit() {
    this.request.put('/users/change-role', this.roleForm.value)
      .subscribe( response => {
        this.auth.userInfo.role = this.roleForm.value.role
      })
  }

}
