import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { Color } from 'src/app/models/color';
import { CartService } from 'src/app/services/cart.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors :Color[] =[];
  currentColor : Color;
  nullColor:Color;
  filterText="";
  dataLoaded=false;

  constructor(private colorService:ColorService,
    private cartService:CartService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    }) 
  }
  setCurrentColor(color:Color){
    this.currentColor = color;
  }

  getCurrentColorClass(color:Color){
    if (color == this.currentColor) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllColorClass(){
    if (!this.currentColor) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  resetCurrentBrand(){
    this.currentColor=this.nullColor;
  }
  addToCart(color:CarDetail){
    this.toastrService.success("Sepete Eklendi",color.colorName)
    this.cartService.addToCart(color);
  }

}
