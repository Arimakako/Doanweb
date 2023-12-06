import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  constructor(private router: Router) {}

  redirectToSignup() {
    // Navigate to the Signup route when the link is clicked
    this.router.navigate(['signup']);
  }
}

