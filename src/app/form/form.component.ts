import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
userForm: FormGroup



hasError= true
  constructor(private route: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
this.userForm= this.fb.group({
nom:['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
prenom:['',[Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
email:['',[Validators.required,Validators.email]],
fone:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]

});

  }
validerFormation(value: any){
if(value=== 'default'){
  this.hasError=true
}else{
  this.hasError= false
}

}


get nom(){
  return this.userForm.get('nom');
}

get prenom(){
  return this.userForm.get('prenom');
}
get email(){
  return this.userForm.get('email');
}

get fone(){
  return this.userForm.get('fone');
}



}
