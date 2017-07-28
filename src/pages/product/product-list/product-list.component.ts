import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {ProductService} from "../product.service";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectProduct:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  products:Array<any>=[];
  deleteLast() {
    this.products.pop();
  }
  search(){
    this.searchResult = this.products.filter(item=>{
      let result = String(item[this.searchType]).match(this.searchText)
      if(result){
        return true
      }else{
        return false
      }
    })
  }
  getUserClick(ev){
    this.selectProduct = ev
    console.log(ev);
  }
 
  sortByAsccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.products.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.products.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 this.products.forEach((user,index)=>{
    let j = Math.floor(Math.random() * index);
     [this.products[index - 1], this.products[j]] = [this.products[j], this.products[index - 1]];
  })
  }
  constructor(meta: Meta, title: Title, private productServ:ProductService) {
    this.products = this.productServ.getProducts()
 
    // Set SEO
    title.setTitle('My Home Page');

    meta.addTags([{
        name: 'author',
        content: 'eddic'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
    ]);
    // end of SEO
  }

  testTempproducts(){
    console.log(this.products.length);
    let tempproducts:Array<any> = []
    this.products.forEach(item=>{
      tempproducts.push(item)
    })
    tempproducts.pop()
    tempproducts.pop()
    tempproducts.pop()
    tempproducts.pop()
    tempproducts.pop()
    console.log(tempproducts.length);
  }

  ngOnInit() {}
}
