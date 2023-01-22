import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { productos } from '../productos.model';
import { ProductosService } from '../productos.service';
import { HttpClient } from '@angular/common/http'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  producto32: productos[] = [] ;
  productoID: string = "";
  constructor(private activatedRoute: ActivatedRoute, private productosService: ProductosService, private httpClient: HttpClient, private loadingCtrl: LoadingController,) {

  }
  
  ngOnInit(): void {
    this.viewProduct();
  }

  viewProduct():any{

    this.productoID = this.activatedRoute.snapshot.paramMap.get('idProdCodigo')
    this.productosService.getOneProduct(this.productoID).subscribe({
      next: (v:productos[]) => this.producto32 = v,
      error: (e) => console.error("error de weas" + e),
      complete: () => console.log("this.producto32[0].NombreProd")  
    })
  }

}
