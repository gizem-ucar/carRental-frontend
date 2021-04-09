import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { CarDetail } from '../models/cardetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl = 'https://localhost:44322/api/';

  constructor(private httpClient: HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  add(car:CarDetail):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl +"cars/add",car) 
  }

  update(car:CarDetail):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl +"cars/update",car) 
  }
}
