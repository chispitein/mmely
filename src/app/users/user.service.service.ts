import { Injectable } from '@angular/core';
import { UsersModel } from './users.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  api_url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  claseusers: UsersModel

  getUsers(){
    return this.http.get(`${this.api_url}/usuarios`)
  }


  getOneUser(idUser: string){
    return this.http.get(`${this.api_url}/usuarios/search/?idProdCodigo=${idUser}`)
  }

  addUser(useradd){
    console.log(useradd)
      return this.http.post(`${this.api_url}/usuarios`, useradd)
  }

  deleteUser(idProdCodigo: string){
    
  }

  
}