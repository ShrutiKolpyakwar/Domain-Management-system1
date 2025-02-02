import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.users = this.getStoredUsers();
  }

  getStoredUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  editUser(user: any) {
    const updatedFirstName = prompt(`Editing user: ${user.username}. Enter new first name:`, user.firstName);
    if (updatedFirstName !== null) {
      user.firstName = updatedFirstName;
    }

    const updatedLastName = prompt(`Enter new last name:`, user.lastName);
    if (updatedLastName !== null) {
      user.lastName = updatedLastName;
    }

    const updatedUsername = prompt(`Enter new username:`, user.username);
    if (updatedUsername !== null) {
      user.username = updatedUsername;
    }

    const updatedDescription = prompt(`Enter new description:`, user.description);
    if (updatedDescription !== null) {
      user.description = updatedDescription;
    }

    const updatedPassword = prompt(`Enter new password:`, user.password);
    if (updatedPassword !== null) {
      user.password = updatedPassword;
    }

    this.updateStoredUsers();
    alert('User updated successfully!');
  }

  updateStoredUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  deleteUser(user: any) {
    if (confirm(`Are you sure you want to delete ${user.username}?`)) {
      this.users = this.users.filter(u => u !== user); // Remove the user from the array
      this.updateStoredUsers(); // Update localStorage after deletion
      alert('User deleted successfully!');
    }
  
  }
  newUser = {
    firstName: '',
    lastName: '',
    username: '',
    description: '',
    password: ''
  };
  
  addUser() {
    if (this.newUser.firstName && this.newUser.lastName && this.newUser.username && this.newUser.password) {
      this.users.push({ ...this.newUser });
      this.updateStoredUsers();
      alert('User added successfully!');
      this.clearNewUserForm();
    } else {
      alert('Please fill out all required fields.');
    }
  }
  
  clearNewUserForm() {
    this.newUser = {
      firstName: '',
      lastName: '',
      username: '',
      description: '',
      password: ''
    };
  }
  
}
