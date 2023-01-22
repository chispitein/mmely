import { Component, OnInit } from '@angular/core';
import { UsersModel } from './users.model'
import { HttpClient } from '@angular/common/http'
import { UsersService } from './user.service.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users2:UsersModel[] = []

  constructor(private http : HttpClient, private userService: UsersService ) { }

  ngOnInit() {
    this.listarUsers()
  }

  listarUsers(){
    this.userService.getUsers().subscribe({
      next: (v:UsersModel[]) => this.users2 = v,
      error: (e) => console.error(e),
      complete: () => console.log(this.users2) 
    })
  }

}
