import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Carimage } from '../models/carimage';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl = 'https://localhost:44322/api/';
  constructor(private httpClient: HttpClient) { }

  getImages(carId:number):Observable<ListResponseModel<Carimage>> {
     let newPath = this.apiUrl + "cars/getImages"
     return this.httpClient.get<ListResponseModel<Carimage>>(newPath);
   }
  getImagesByCarId(carId:number):Observable<ListResponseModel<Carimage>> {
    let newPath = this.apiUrl + "cars/getbyid?Id="+carId
    return this.httpClient.get<ListResponseModel<Carimage>>(newPath);
  }
}