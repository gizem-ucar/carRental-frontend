import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private cardetailService:CardetailService,
   private activatedRoute:ActivatedRoute,
   private toastrService:ToastrService,
     private cartService:CartService
        ) { }

  cars:CarDetail[]=[]
  //rental:RentalDetail[]
  dataLoaded=false;
  imageBasePath="https://localhost:44322/Images"

  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    if(params["carId"]){
        this.getCarByCarId(params["carId"])
      }
      else{
        this.getCarDetails()
      }
    })
  }

  getCarDetails(){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
    }

    getCarByCarId(carId:number){
      this.cardetailService.getCarByCarId(carId).subscribe(response=>{
        this.cars=response.data
        this.dataLoaded=true;
      })
    }
    rentTest(car:CarDetail){
      this.toastrService.success("Kiralandı",car.brandName + " " + car.carName)
    }
    // addToCart(car:CarDetail){
    //   this.toastrService.success("Araç Kiralandı",car.carName)
    //   this.cartService.addToCart(car);
    // }
}