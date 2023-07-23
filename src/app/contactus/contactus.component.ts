import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactusService } from 'src/app/services/contactus.service';
import { ContactUs } from '../models/contactUs';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactusForm: FormGroup;
  formStatus:string='Add New';
  docId:any;
  Fname:string = '';
  Lname:string = '';
  Phone:string = '';
  Email:string = '';
  Subject:string = '';
  Message:string = '';

  constructor(private contactusService:ContactusService, private fb:FormBuilder, private route:ActivatedRoute) {
    this.contactusForm =this.fb.group({
      Fname:['',Validators.required],
      Lname:['',Validators.required],
      Phone:['',Validators.required],
      Email:['',Validators.required],
      Subject:['',Validators.required],
      Message:['',Validators.required],
  })
   }

  ngOnInit(): void {
  }
  get fc(){
    return this.contactusForm.controls;
  }
  onSubmit(){;
    const MessageData:ContactUs={
      FullName:this.contactusForm.value.Fname + " " + this.contactusForm.value.Lname,
      Phone:this.contactusForm.value.Phone,
      Email:this.contactusForm.value.Email,
      Subject:this.contactusForm.value.Subject,
      Message:this.contactusForm.value.Message,
    }
    this.contactusService.uploadMessage(MessageData);
    this.contactusForm.reset();
  }
}
