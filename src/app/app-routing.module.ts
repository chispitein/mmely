import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'productos',
    children:[
      {
        path: "",
        loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: ":idProdCodigo",
        loadChildren: () => import('./productos/detalle/detalle.module').then( m => m.DetallePageModule )
      }
    ]
  },
  {
    path: 'agregarproducto',
    loadChildren: () => import('./productos/addproduct/addproduct.module').then( m => m.AddproductPageModule)
  },
  {
    path: 'users',
    children: [
    {
      path: "", 
      loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
    },
    {
      path: ":idUser",
      loadChildren: () => import('./users/userdetail/userdetail.module').then( m => m.UserdetailPageModule)
    },
    {
      path: "adduser",
      loadChildren: () => import('./users/adduser/adduser.module').then( m => m.AdduserPageModule)
    },

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
