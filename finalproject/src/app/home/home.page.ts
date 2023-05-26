import { Component } from '@angular/core';
import { ApiServiceService } from '../api/api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  DataUser : any;

  isAlertOpen = false;
  public alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  constructor(
    private Api : ApiServiceService
  ) {
    console.log (this.GetAllUsers())
  }

  GetAllUsers(){
    this.Api.GetListUser().subscribe( (res:any) =>{
      this.DataUser = res['data'];
      console.log(this.DataUser[0]);
      console.log(this.DataUser[1]);
    });
  }
}
