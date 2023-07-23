import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private toastr: ToastrService,) { }

  ngOnInit(): void {
  }
  showSignup(){
    var login = document.getElementById('login')
    var signup = document.getElementById('signup')

    login.style.display = 'none'
    signup.style.display = 'block'
  }
  showlogin(){
    var login = document.getElementById('login')
    var signup = document.getElementById('signup')

    signup.style.display = 'none'
    login.style.display = 'block'
  }
  onSubmit(formValue){
    console.log(formValue);
    this.authService.login(formValue.email, formValue.password);
  }
  onSubmitSignup(formValue){
    console.log(formValue);
    if(formValue.password !== formValue.Password2){
      this.toastr.error('Passwords not much!')
    }
    else{
      this.authService.signup(formValue.email, formValue.password);
    }
  }
}
