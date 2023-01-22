import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service'
import { productos } from './productos.model'
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos2: productos[] = []


  constructor(private ProductosService: ProductosService, private httpClient: HttpClient) {
    
  };

  ngOnInit() {
    this.listarProductos2();
  }

  
  listarProductos2(){
    this.ProductosService.getProducts().subscribe({
      next: (v:productos[]) => this.productos2 = v,
      error: (e) => console.error(e),
      complete: () => console.log(this.productos2) 
    })
  }
}
