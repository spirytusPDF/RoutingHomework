import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-reactive-form',
  styleUrl: './reactive-form.css',
  templateUrl: './reactive-form.html',
})
export class ReactiveForm {
  user?: User;
  userFile: string | null = null;
  isSent:boolean = false;

  degrees:string[] = ["Preschool education", "Complete general secondary education",
  "Vocational (vocational and technical) education", "Professional pre-higher education","Higher education"];

  hobbies:string[] = ["Sports", "Music", "Art", "Cooking", "Gardening"];
  myForm:FormGroup=new FormGroup({
    Name:new FormControl('Tom', Validators.required),
    Email:new FormControl('gmail@mail.com', [Validators.required, Validators.email]),
    Password:new FormControl('aAnf@1756', [Validators.required, this.customPasswordValidator]),
    ConfirmPassword:new FormControl('aAnf@1756', Validators.required),
    Degree:new FormControl('', Validators.required),
    Address:new FormControl('Av. do Mar 54', Validators.required),
    Hobbies:new FormArray(this.hobbies.map(()=>new FormControl(false))),
    PictureLink:new FormControl(''),
    IsConfirmed:new FormControl(false, Validators.required),
  }, { validators: this.passwordsMatchValidator });
 
  customPasswordValidator(form: AbstractControl): ValidationErrors | null {
    if (/[a-z]/.test(form.value) && /[A-Z]/.test(form.value)&&/[0-9]/.test(form.value)) {
        return null;
    }
    else
    return { "wrong": true };
  }

  passwordsMatchValidator(form: AbstractControl): ValidationErrors | null {
    return form.get('Password')?.value === form.get('ConfirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  chooseFile(event:Event){
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if(file){

    let reader = new FileReader();
    reader.onload = ()=>{
      this.userFile = typeof reader.result === 'string' ? reader.result : null;
    }
    reader.readAsDataURL(file);
    }
  }

  sendForm(){
    console.log("SendForm()");

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    

    const formValue = this.myForm.getRawValue();
    if(formValue.IsConfirmed){
      this.user = {
      Name: formValue.Name,
      Email: formValue.Email,
      Password: formValue.Password,
      ConfirmPassword: formValue.ConfirmPassword,
      Degree: formValue.Degree,
      Adress: formValue.Address,
      Hobbies: this.hobbies.filter((_, index) => formValue.Hobbies[index]),
      PictureLink: this.userFile ?? undefined,
      IsConfirmed: formValue.IsConfirmed,
    };
    this.isSent = true;
  }
    }
    
}
