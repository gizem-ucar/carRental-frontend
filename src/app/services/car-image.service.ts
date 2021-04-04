import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = 'https://localhost:44322/api/carImages/getall';
  constructor(private httpClient: HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>> {
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl);
  }
}
