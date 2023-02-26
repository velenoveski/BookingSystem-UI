import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestBookingService {

  readonly bookingResourceAPIUrl = "https://localhost:7111/api/Booking";

  constructor(private http: HttpClient) { }

  getResourceByIdQDateFromDateTo(resourceId : string, dateFrom: Date, dateTo: Date ): Observable<any> {
    return this.http.get<any>(this.bookingResourceAPIUrl + `/${resourceId}` + `/${dateFrom}` + `/${dateTo}`);
  }

  bookResource(body: any){ debugger;
    return this.http.post(this.bookingResourceAPIUrl + "/requestbooking", body);
  }
}
