import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit,OnDestroy {
  productId:string="";
  product:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getUserSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private productServ:ProductService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.productServ.products.push(this.product)
    this.location.back();
  }
  ngOnInit() {
    this.getUserSubscribe = this.route.params.subscribe(params=>{
      this.getProduct(params['sid']).then(product=>{
      console.log(product)
      this.productId = product.id;
      this.product = product
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getUserSubscribe.unsubscribe();
  }

  getProduct(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let product = {name:""}
        this.isNew = true;
        resolve(product)
      }
      let product = this.productServ.products.find(item=>item.id == id)
      if(product){
        resolve(product)
      }else{
        reject("product not found")
      }
    })
    return p
}

}
