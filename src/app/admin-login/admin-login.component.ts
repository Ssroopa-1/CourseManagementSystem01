import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminform:FormGroup;
  constructor() { 
    this.adminform=new FormGroup({
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required,Validators.minLength(8)])
    });
  }

  ngOnInit() {
  }

}