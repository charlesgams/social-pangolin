import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth: AuthService) {}

  @Input() isExtern = false

  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
    ]),
    role: new FormControl('Guerrier', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
    ]),
  });

  onSubmit() {
    if(!this.isExtern)
      this.auth.onRegister(this.registerForm.value)
    else {
      this.auth.onRegisterExtern(this.registerForm.value)
    }
  }
}
