import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as EmailValidator from 'email-validator';


@Component({
  selector: 'app-early-access-section',
  templateUrl: './early-access-section.component.html',
  styleUrls: ['./early-access-section.component.css']
})
export class EarlyAccessSectionComponent implements OnInit {

  emailNotValid=false;

  constructor() {

  }

  ngOnInit(): void {

  }

  onEmailSubmit(form:NgForm){
    this.emailNotValid=!EmailValidator.validate(form.value.email);
  }
  emailOnChange(){
    this.emailNotValid=false;
  }
}
