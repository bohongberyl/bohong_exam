import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:Array<any> = [
    {"index":10022,
     "name":"牛奶",
      "name1":"多多零食店",
      "date":"2017-07-01",
      "exam1":"华北",
      "exam2":102,
      "exam3":234},
      {"index":10024,
      "name":"果汁",
      "name1":"AA饮品店",
      "date":"2017-07-01",
      "exam1":"华南",
      "exam2":30,
      "exam3":66},
      {"index":10026,
      "name":"水果",
      "name1":"AA饮品店",
      "date":"2017-07-01",
      "exam1":"华东",
      "exam2":99,
      "exam3":88},
      {"index":10029,
      "name":"甜点",
      "name1":"蛋糕店",
      "date":"2017-07-01",
      "exam1":"华南",
      "exam2":77,
      "exam3":77},
      {"index":10027,
      "name":"海鲜",
      "name1":"全家福",
      "date":"2017-07-01",
      "exam1":"华北",
      "exam2":45,
      "exam3":56}
  ]
deleteLast(){
  this.users.pop()
}
saveNewUser(){
  this.users.push({
     "index":10011,
      "name":"玩具",
      "name1":"大玩家",
      "date":"2009-02-01",
      "exam1":"华北",
      "exam2":76,
      "exam3":112
  })
}
  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
     this.users.sort(function(min,max){
     return min.index - max.index;})
  }
  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.users.sort(function(min,max){
    return max.index - min.index;})

  }
  sortByRadom(){
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
   this.users.sort(function (a, b){
   
        if (Math.random() > 0.5 )
          { return 1 ;
          }
         if (Math.random() < 0.5)
          { return -1 ;
          }
          return 0;
   }
   )
  }
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
