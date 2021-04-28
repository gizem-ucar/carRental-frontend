import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: CarDetail[] =[];
  currentCar:CarDetail;
  nullCar:CarDetail;
  filterText="";
  dataLoaded = false;
  
  constructor(private cardetailService:CardetailService,
              private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,
              private cartService:CartService
              ) {}

  ngOnInit(): void {
        this.getCars();
  }

  getCars(){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  setCurrentCar(car:CarDetail){
    this.currentCar=car;
  }

  getCurrentCarClass(car:CarDetail){
    if(car == this.currentCar){
      return "list-group-item  list-group-item-warning"
    }else{
      return "list-group-item"
    }
  }

  getAllCarsClass(){
    if(!this.currentCar){
      return "list-group-item list-group-item-warning"
    }else{
      return "list-group-item"
    }
  }

  resetCurrentCar(){
    this.currentCar=this.nullCar;
  }
  addToCart(car:CarDetail){
    this.toastrService.success("Sepete Eklendi",car.carName)
    this.cartService.addToCart(car);
  }
}
