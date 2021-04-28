import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/cardetail';
import { BrandService } from 'src/app/services/brand.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands :Brand[] =[];
  currentBrand : Brand;
  nullBrand:Brand;
  filterText="";
  dataLoaded=false;

  constructor(private brandService:BrandService,
    private cartService:CartService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.dataLoaded=true;
    }) 
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if (brand == this.currentBrand) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllCarsClass(){
    if (!this.currentBrand) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  resetCurrentBrand(){
    this.currentBrand=this.nullBrand;
  }
  addToCart(brand:CarDetail){
    this.toastrService.success("Sepete Eklendi",brand.brandName)
    this.cartService.addToCart(brand);
  }

}
