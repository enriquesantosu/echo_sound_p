import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  passwordMatch = false;

  @ViewChild('passwordConfirm') passwordConfirm!: ElementRef
  @ViewChild('passwordAlert') passwordAlert!: ElementRef

  regexString = /^[a-zA-Z\s]+$/
  regexNumber = /^[0-9]+$/
  regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.regexString)]],
      last_name: ['', [Validators.required, Validators.pattern(this.regexString)]],
      email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
      password: ['', [Validators.required, Validators.pattern(this.regexPassword), Validators.minLength(8)]]
    })
  }

  formSubmit() {
    console.log(this.userForm)
  }

  verifyPassword(event: Event) {

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
