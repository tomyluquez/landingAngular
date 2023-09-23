import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  disabled: boolean = true;
  form = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    message: ['', Validators.required]
  });
 
  constructor(private fb: FormBuilder) {

  }

  onSubmit(e: Event) {
    e.preventDefault()
    if(this.form.status === 'VALID') this.disabled = false;
    console.log(this.form)
  }

}
