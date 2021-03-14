import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopheaderService {
  baseURL:string='';
  constructor(private http:HttpClient) { }

  
    getheaderdetailsData(): Observable<any> {
     this.baseURL='https://localhost:44323/api/Header';
      return this.http.get<any>(this.baseURL);
 
  }
}
