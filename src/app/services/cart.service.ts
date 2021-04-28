import { Injectable } from '@angular/core';
import { CarDetail } from '../models/cardetail';
import { CartItem } from '../models/carItem';
import { CartItems } from '../models/carItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:CarDetail){
    let item = CartItems.find(c=>c.car.carId===car.carId);
    if (item) {
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem)
    }
  }
  removeFormCart(car:CarDetail){
    let item = CartItems.find(c=>c.car.carId===car.carId);
    CartItems.splice(CartItems.indexOf(item),1);
  }
  list():CartItem[]{
    return CartItems;
  }
}
