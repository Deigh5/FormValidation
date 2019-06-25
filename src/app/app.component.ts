import { Component } from '@angular/core';
import {FormBuilder, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormValidation';

  personForm
  info = []
  // name: string
  // surname: string
  // age: string
  // email: string 
  // number: string

  constructor (public formBuilder:FormBuilder)
  {
    this.personForm = formBuilder.group({
        name: ["", Validators.required],
        surname: ["",Validators.required],
        age: ["",Validators.required],
        email: ["",Validators.email],
        number: ["",Validators.required]
      }
    )
  }

  addSave()
  {
    
    this.info.push({
      name: this.personForm.value.name,
      surname:this.personForm.value.surname ,
      age:this.personForm.value.age,
      email:this.personForm.value.email,
      number:this.personForm.value.number
    })

    this.personForm.name = ''
    this.personForm.surname = ''
    this.personForm.age = ''
    this.personForm.email = ''
    this.personForm.number = ''
  }
}
