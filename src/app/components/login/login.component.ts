import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticService } from '../../services/authentic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm!: FormGroup

  constructor(private fb: FormBuilder,
              private loginApp: AuthenticService) {

  }

    ngOnInit(): void {
      this.myForm = this.createMyform();
    }

  private createMyform(): FormGroup {
    return this.fb.group({
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    });
  }
  public submitFormulario() {
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
      return;
      console.log(this.myForm.value);
    }

    if (!this.loginApp.ingresarAplicativo(this.myForm.value)) {
      alert("Usuario o contraseña invalidad")
    }
  } 

  public get f(): any {
    return this.myForm.controls;

  }


  
}
