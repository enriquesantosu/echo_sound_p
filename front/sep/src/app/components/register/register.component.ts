import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  passwordMatch = false;

  userForm: FormGroup;

  @ViewChild('passwordConfirm') passwordConfirm!: ElementRef
  @ViewChild('passwordAlert') passwordAlert!: ElementRef

  regexString = /^[a-zA-Z\s]+$/
  regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/

  constructor(private fb: FormBuilder, private _userServices: UsersService, private router: Router) {

    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.regexString)]],
      last_name: ['', [Validators.required, Validators.pattern(this.regexString)]],
      email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
      password: ['', [Validators.required, Validators.pattern(this.regexPassword), Validators.minLength(8)]]
    })
  }


  formSubmit() {

    console.log(this.userForm.value)

    this._userServices.createUser(this.userForm.value).subscribe(apiResponse => {
      console.log(this.userForm)
      console.log('User created')

      Swal.fire(
        'Good job!',
        'You are now registered on our platform',
        'success'
      )

      setTimeout(() => {
        this.router.navigate(['/login'])
      }, 2000);

    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Invalid form submission',
        iconColor: '#ff0d0d'
      })
    })
  }

  verifyPassword(event?: Event) {

    let passwordValue1 = this.userForm.get('password')?.value
    let passwordValue2 = this.passwordConfirm.nativeElement.value

    if (passwordValue1 != passwordValue2) {
      this.passwordAlert.nativeElement.classList.remove('d-none')
      console.log('no password match')
      this.passwordMatch = false
      return false
    } else {
      this.passwordAlert.nativeElement.classList.add('d-none')
      this.passwordMatch = true
      console.log('password match')
      return true
    }
  }
}
