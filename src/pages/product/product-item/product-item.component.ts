import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product:any
  @Output() productClick = new EventEmitter<any>();
  constructor(private productServ:ProductService) { 
  }
  onProductClick(){
    this.productClick.emit(this.product)
  }
  check(){
    this.product.check = true;
  }
  isChecked(){
    if(this.product.check&&this.product.check==true){
      return true
    }else{
      return false
    }
  }
  delete(){
    let id = this.product.id
    this.productServ.products.forEach((item,index,array)=>{
      if(item.id == id){
        array.splice(index,1)
      }
    })
  }
  ngOnInit() {
  }
}
