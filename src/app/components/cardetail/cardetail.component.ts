import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { Carimage } from 'src/app/models/carimage';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  carDetails: CarDetail[] =[];
  car:CarDetail;
  images:Carimage[] = [];
  //rent:RentalDetail[]=[];
  currentCar:CarDetail;
  imageBasePath="https://localhost:44322"
  dataLoaded = true;

  constructor(private cardetailService:CardetailService,
     private activatedRoute:ActivatedRoute,
     private carimageService:CarimageService

     ) {}

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params=>{    
       if (params["carId"]) {
         this.getImagesByCarId(params["carId"])
       }
       if (params["brandId"]){
         this.getCarDetailsByBrandId(params["brandId"])
       }else if(params["colorId"]){
         this.getCarDetailsByColorId(params["colorId"])
       }else{
         this.getCarDetails()
       }
     })
     
  }
  getCarDetails(){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true;
    })
  }
  getCarDetailsByBrandId(brandId:number) {
    this.cardetailService.getCarDetailsByBrandId(brandId).subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true;
    })
  }
  getCarDetailsByColorId(colorId:number) {
    this.cardetailService.getCarDetailsByColorId(colorId).subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true;
    })
  }
  getCarByCarId(carId:number){
    this.cardetailService.getCarByCarId(carId).subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
  }
  setCurrentCar(car:CarDetail){
    this.currentCar=car;
  }
  getImages(car:CarDetail){
    if(car.imagePath){
      return car.imagePath
    }
    else{
      return 'logo.png'
    }
  }
  getImagesByCarId(carId:number){
    this.carimageService.getImagesByCarId(carId).subscribe((response) => {
      this.images = response.data;
      console.log(response.data);
    });
  }
}
