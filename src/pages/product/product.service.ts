import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{
    isLogined:boolean = false;
    products: Array < any > = [{
      'id': 10011,
     'name':'索尼',
     'modelp':'A',
     'price':2334,
     'sumacc': 55, // 10 10 5 5 20 5
     'sumnum': 3,
     'agent': '李丽'
    },
    {
     'id': 10012,
     'name':'索尼',
     'modelp':'B',
     'price':4552,
     'sumacc': 85, // 10 10 5 20 20 20 原始数据加分：修改了函数变量命名
     'sumnum': 2,
     'agent': '张宇'
    },
    {
     'id': 10013,
     'name':'佳能',
     'modelp':'C',
     'price':3114,
     'sumacc': 80, // 10 10 5 20 20 15
     'sumnum': 4,
     'agent': '李斌'
    },
    {
     'id': 10014,
     'name':'尼康',
     'modelp':'B',
     'price':2999,
     'sumacc': 75, // 5 10 5 15 20 20 未修改README.md
     'sumnum': 6,
     'agent':'鹿晗'
    },
    {
     'id': 10015,
     'name':'松下',
     'modelp':'B',
     'price':4999,
     'sumacc': 50, // 5 5 5 15 15 15 未修改readme，版本提交非项目根目录
     'sumnum': 1,
     'agent': '邓超'
    },
    {
     'id': 10016,
     'name':'松下',
     'modelp':'A',
     'price':3888,
     'sumacc': 75, // 10 10 5 15 15 20
     'sumnum': 3,
     'agent': '李晨'
    },
    {
     'id': 10017,
     'name':'尼康',
     'modelp':'C',
     'price':2998,
     'sumacc': 75, // 10 10 10 15 20 10
     'sumnum': 6,
     'agent': '娜扎'
    },
    {
     'id': 10018,
     'name':'佳能',
     'modelp':'C',
     'price':3099,
     'sumacc': 40, // 5 10 5 5 10 5 未修改readme
     'sumnum': 5,
     'agent': '陈宇'
    },

    {
     'id': 10019,
     'name':'松下',
     'modelp':'B',
     'price':4099,
     'sumacc': 85, // 10 10 5 20 20 20
     'sumnum': 2,
     'agent': '李娜'
    }
  ];

    constructor(){

    }

    getProducts(){
        return this.products;
    }

}

