import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { AuthService } from 'src/services/auth.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  @ViewChild('login') login! :ElementRef;
  constructor(private authService: AuthService, private router: Router, ) { }
  email: any = '';
  password: string = '';
  shakeIt = false;
  shakeEmail = false;
  incorrectPassword = false;
  incorrectEmail = false;
  onClick() : void {
      this.login.nativeElement.blur();
      
      console.log(this.email)
      console.log(this.password)

      this.authService.login(this.email, this.password)
        .subscribe(data => {
          if (data.status === '400') { //incorrect credentials
            if (data.message === 'incorrect password') {
            
              this.incorrectPassword = true;
              this.shakeIt = true;
              setTimeout(() => {
                this.shakeIt = false;
              }, 300);
            }

            if (data.message === 'incorrect email') {
              alert('Unrecognized Email')
            }

          }
          else {
            //go to new component
            console.log("hello")
            
            this.router.navigateByUrl('home', {state: {email: this.email, test: 'test'} })
            
            
          }
          console.log(data)
        })
      
  }
  createAccountClick() : void {
    this.router.navigateByUrl('signup')
  }
  ngOnInit(): void {
  }

  

}
