import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  readonly resourcesAPIUrl = "https://localhost:7111/api/Resource";

  constructor(private http: HttpClient) { }

  getResourcesList(): Observable<any[]>{
    return this.http.get<any>(this.resourcesAPIUrl);
  }

  getResource(id: string): Observable<any> {
    return this.http.get<any>(this.resourcesAPIUrl + `/${id}`);
  }

  getResourceByIdQuantity(id: string, quantity: number ): Observable<any> {
    return this.http.get<any>(this.resourcesAPIUrl + `/${id}` + `/${quantity}`);
  }
  
  addResource(body: any){
    return this.http.post(this.resourcesAPIUrl, body);
  }
}
