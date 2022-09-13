import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  user = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required])
  })
  constructor(private SignUpService: SignupService, private router: Router) { }

  formSubmit() {
    // console.log(this.user.value);
    this.SignUpService.usersignup(this.user.value).subscribe(
      (res) => {
        console.log(res);
        Swal.fire("SuccessFully Done", "Welcome to Career Infotech", "success");
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
        Swal.fire("Error !!", "User is all ready there", "error");
      }
    )
  }

  ngOnInit(): void {
  }

}
