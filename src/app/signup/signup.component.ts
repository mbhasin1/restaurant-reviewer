import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';
  fname: string = '';
  lname: string = '';
  role: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.authService.createUser(this.email, this.password, this.lname, this.role, this.fname).subscribe(
      data => {
        console.log(data)
        if (data.status === '200') {
          this.router.navigateByUrl('login')
        }
        else {
          alert('You may already have an account')
        }
      }
    )

    
  }
  backToLoginClick(){
    this.router.navigateByUrl('login')
  }


}
