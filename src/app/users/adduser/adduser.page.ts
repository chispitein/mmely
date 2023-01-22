import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service.service'
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder,FormControl, Validators } from "@angular/forms";
import { UsersModel } from "../users.model";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {

  private user : UsersModel[] = []
  defaultDate = new Date().toISOString();
  ionicForm: FormGroup;

  constructor(private userService: UsersService, private http: HttpClient, public formbuilder: FormBuilder) { 
    this.ionicForm = this.formbuilder.group({
      'Nombre': new FormControl("", Validators.required),
      'SNombre': new FormControl("", Validators.required),
      'Apellido': new FormControl("", Validators.required),
      'Sapellido': new FormControl("", Validators.required),
      'FechaNac': new FormControl('', Validators.required),
      'FechaContrato': new FormControl("", Validators.required),
      'Pass': new FormControl("", Validators.required),
      'Rut': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'idEstadoUser': new FormControl(0, Validators.required),
      'idTipoUser': new FormControl(0, Validators.required)
    })
  }

  ngOnInit() {
  }

  AgregarUsuario(user):any{
    this.userService.addUser(user).subscribe({
      next: ((v) =>console.log(v)),
      error: (e) => console.error("error de weas" + e),
      complete: () => console.log(this.user)  
    })
  }
  
  submitForm() {
    console.log(this.ionicForm.value)
    this.AgregarUsuario(this.ionicForm.value)
  }


}
