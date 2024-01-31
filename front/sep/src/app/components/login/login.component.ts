import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userForm: FormGroup;

  regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/

  @ViewChild('email') email!: ElementRef
  @ViewChild('password') password!: ElementRef

  constructor(private fb: FormBuilder, private _sessionServices: SessionService, private router: Router) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
      password: ['', [Validators.required, Validators.pattern(this.regexPassword), Validators.minLength(8)]]
    })
  }


  formSubmit() {

    console.log('form submit fired')

    console.log(this.userForm.value)

    this._sessionServices.userLogin(this.userForm.value).subscribe((apiResponse: any) => {
      console.log(apiResponse)
      console.log(this.userForm)

      console.log('Login successful!')

      Swal.fire(
        'Good job!',
        'You are now logged onto our platform',
        'success'
      )

      setTimeout(() => {
        this.router.navigate(['/landing'])
      }, 2000);

    }, error => {
      console.log(error)

      Swal.fire({
        icon: 'error',
        title: 'Invalid user or password',
        iconColor: '#ff0d0d'
      })
    })
  }
}
