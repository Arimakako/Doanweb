import { Component } from '@angular/core';
import { ServiceClientService } from '../service-client.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: any;
  serviceId:string=''
  errMessage:string=''
  private _router: any;
  constructor(_service:ServiceClientService){
  _service.getServices().subscribe({
  next:(data)=>{ this.services=data},
  error:(err)=>{
  this.errMessage=err
  }
  })
  }
  detailService(serviceId: string) {
    this._router.navigate(['service/detail', serviceId])
  }

}
