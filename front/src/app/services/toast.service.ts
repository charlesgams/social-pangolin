import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor() { }

  isActive: boolean = false
  message: string = ""
  type: string = ""

  show(message: string, type: string) {
    console.log(message)

    this.isActive = true

    this.message = message
    this.type = type

    setTimeout(() => this.isActive = false, 3000)
  }
}
