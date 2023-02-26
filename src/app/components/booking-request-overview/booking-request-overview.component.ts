import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-booking-request-overview',
  templateUrl: './booking-request-overview.component.html',
  styleUrls: ['./booking-request-overview.component.css']
})
export class BookingRequestOverviewComponent implements OnInit {
  resourcesList$!:Observable<any[]>;

  constructor(private service: ResourcesService) { }

  ngOnInit(): void {
    this.resourcesList$ = this.service.getResourcesList();
  }

  modalTitle:string = '';
  activateBookingResourceComponent:boolean = false;
  resource:any;

  modalBookResource(){
    this.resource = {
      id:0,
      name: null,
      quantity:null,
    }
    this.modalTitle = "Booking" + this.resource.name;
    this.activateBookingResourceComponent = true;
  }

  modalEdit(item:any) {
    this.resource = item;
    this.modalTitle = "Booking " + this.resource.name;
    this.activateBookingResourceComponent = true;
  }

  modalClose() {
    this.activateBookingResourceComponent = false;
    this.resourcesList$ = this.service.getResourcesList();
  }
}
