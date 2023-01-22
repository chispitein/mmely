import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { productos } from '../productos.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder,FormControl, Validators } from "@angular/forms";
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {

  private product : productos[] = []
  defaultDate = new Date().toISOString();
  ionicForm: FormGroup;

  constructor(private productosService: ProductosService, private http: HttpClient, public formbuilder: FormBuilder, private toastController: ToastController) { 
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

  startScan = async () => {
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({ force: true });
  
    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();
  
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
  
    // if the result has content
    if (result.hasContent) {
      this.presentToast('middle', result.content)
      console.log(result.content); // log the raw scanned content
    }
  };

  async presentToast(position: 'top' | 'middle' | 'bottom', text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1500,
      position: position
    });

    await toast.present();
  }
  
  AgregarProducto(user):any{
    this.productosService.addProducts(user).subscribe({
      next: ((v) =>console.log(v)),
      error: (e) => console.error("error de weas" + e),
      complete: () => console.log(this.product)  
    })
  }
  
  submitForm() {
    console.log(this.ionicForm.value)
    this.AgregarProducto(this.ionicForm.value)
  }

}
