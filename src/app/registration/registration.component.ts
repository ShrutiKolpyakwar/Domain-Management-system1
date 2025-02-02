import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      description: [''],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      alert('Please fill all required fields.');
      return;
    }

    const userData = this.registrationForm.value;
    localStorage.setItem('users', JSON.stringify([...this.getStoredUsers(), userData]));
    alert('Registration successful! Now redirecting to login page.');
    this.router.navigate(['/login']);
  }

  getStoredUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}