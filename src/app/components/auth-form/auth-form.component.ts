import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import * as CryptoJs from 'crypto-js' 

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  submitForm:FormGroup 
ngOnInit(): void {
  this.builSubmitForm()  
}
constructor(private fb:FormBuilder ){}
  builSubmitForm(){
    this.submitForm=this.fb.group({
      email:new FormControl('',[Validators.required,Validators.email]),
      name:new FormControl('',Validators.required)
    })
  }
  onsubmit(){
    console.log(this.submitForm.value);
    let data= this.submitForm.value
    const typedData=CryptoJs.AES.encrypt(JSON.stringify(data),'datakey').toString()
    localStorage.setItem('localdata',typedData)
  }

  
  get name() { return this.submitForm.get('name'); }
  get email() { return this.submitForm.get('email'); }
decryptvalue:any
  decryptdata(){
    if(localStorage.getItem('localdata')){
      const txt=localStorage.getItem('localdata') ||'';
      const decryptxt= CryptoJs.AES.decrypt(txt,'datakey')
      console.log(decryptxt.toString(CryptoJs.enc.Utf8));
      // this.decryptdata =JSON.parse(decryptxt.toString(CryptoJs.enc.Utf8))
    }
  }
}
