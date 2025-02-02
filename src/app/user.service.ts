// src/app/user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [];  // Store users in this array

  constructor() { }

  // Method to add user data
  addUser(user: any) {
    this.users.push(user);
  }

  // Method to retrieve all users
  getUsers() {
    return this.users;
  }
}
