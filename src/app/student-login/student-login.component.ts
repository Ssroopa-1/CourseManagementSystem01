import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  studentform:FormGroup;
  constructor() { 
    this.studentform=new FormGroup({
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required,Validators.minLength(8)])
    });
  }

  ngOnInit() {
  }

}
