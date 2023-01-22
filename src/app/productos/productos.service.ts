import { Injectable } from '@angular/core';
import { productos } from './productos.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  api_url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  claseproductos: productos

  getProducts(){
    return this.http.get(`${this.api_url}/productos`)
  }


  getOneProduct(idProdCodigo: string){
    return this.http.get(`${this.api_url}/productos/search/?idProdCodigo=${idProdCodigo}`)
  }

  addProducts(productoadd){
    console.log(productoadd)
      return this.http.post(`${this.api_url}/usuarios`, productoadd)
  }

  deleteProducts(idProdCodigo: string){
    
  }

  
}
