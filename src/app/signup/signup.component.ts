import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = ''; // Added for confirm password

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  register() {
    if (!this.isPasswordValid()) {
      alert('Passwords do not match!');
      return;
    }

    let bodyData = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
    };

    this.http.post('http://localhost:9992/user/create', bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('user Registered Successfully');
      });
  }

  save() {
    this.register();
  }

  // New method to validate password
  isPasswordValid(): boolean {
    return this.password === this.confirmPassword;
  }
}
