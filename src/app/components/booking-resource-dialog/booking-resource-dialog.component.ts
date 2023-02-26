import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestBookingService } from 'src/app/services/request-booking.service';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-booking-resource-dialog',
  templateUrl: './booking-resource-dialog.component.html',
  styleUrls: ['./booking-resource-dialog.component.css']
})
export class BookingResourceDialogComponent implements OnInit {

  resourcesList$!: Observable<any[]>;
  DateFrom: Date = new Date();
  DateTo: Date = new Date();;

  constructor(private service: RequestBookingService) { }

  @Input() resource:any;
  id: number = 0;
  name: string = "";
  BookedQuantity: number = 0;

  ngOnInit(): void {
    this.id = this.resource.id;
    this.name = this.resource.name;
    this.BookedQuantity = this.resource.quantity;
    this.DateFrom = this.resource.dateFrom;
    this.DateTo = this.resource.dateTo;
  }

  bookResource() { debugger;
    var body = {
      DateFrom: formatDate(this.DateFrom, 'yyyy-MM-dd', 'en'),
      DateTo: formatDate(this.DateTo, 'yyyy-MM-dd', 'en'),
      BookedQuantity: this.BookedQuantity,
      ResourceId: this.id
    }
    this.service.bookResource(body).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    },
    error => {
      console.log(error);
      var showAddSuccess = document.getElementById('add-warning-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }
}
