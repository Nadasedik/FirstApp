import { IProduct } from './../ViewModels/IProduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
private   ProductList:IProduct[];
  constructor() { 
    this.ProductList=[{id:1,Name:"dress",Quantity:30,Price:150,Image:'https://picsum.photos/id/1014/300/250',CateogryID:1},
    {id:2,Name:"Apple",Quantity:10,Price:40000,Image:'https://picsum.photos/id/48/300/250',CateogryID:3}
   ,{id:3,Name:"table",Quantity:9,Price:4000,Image:'https://picsum.photos/id/1068/300/250',CateogryID:2}
   ,{id:4,Name:"LG",Quantity:13,Price:30000,Image:'https://picsum.photos/id/20/300/250',CateogryID:3}
   ,{id:5,Name:"T-shirt",Quantity:1,Price:100,Image:'https://picsum.photos/id/1059/300/250',CateogryID:1}
   ,{id:6,Name:"Lenovo",Quantity:20,Price:25000,Image:'https://picsum.photos/id/445/300/250',CateogryID:3}
    ,{id:7,Name:"skirt",Quantity:0,Price:100,Image:'https://picsum.photos/id/535/300/250',CateogryID:1}
    ,{id:8,Name:"Dell",Quantity:16,Price:20000,Image:'https://picsum.photos/id/0/300/250',CateogryID:3}
    ]
  }

  getAllProduct():IProduct[]
  {
    return this.ProductList
  }

  getProductBtCatID(SCatgID:number):IProduct[]
  {
    if(SCatgID==0)
    return this.ProductList;
    else
    {
      let cat= this.ProductList.filter(prd=>
         prd.CateogryID==SCatgID
      )
      console.log(cat)
      return cat
    }

  }
  
  gitProductByID(prdID:number): IProduct | null
  {
    let exist=this.ProductList.find(prd=>prd.id==prdID)
    if(exist)
    {
      return exist
    }
    else
    {
      return null
    }
  }

  getAllProdductIDS():number[]
  {
    let prdid:number[]=this.ProductList.map(prd=>prd.id)
    return prdid
  }

  addProduct(prd:IProduct)
  {
    this.ProductList.push(prd);
  }

  UpdateProducts(ids:number,prd:IProduct)
  {
    let pID=this.ProductList.find(prod=>prod.id==ids)
    if(pID)
    {
      this.ProductList.map(p=>
        {
          if(p.id==ids)
          {
            p.Name=prd.Name
            p.Quantity=prd.Quantity;
            p.Price=prd.Price;
            p.Image=prd.Image;
            p.CateogryID=prd.CateogryID
          }
        })
    }
    else{
      alert("Product Not Found !")
    }
    for(let i in this.ProductList)
    {
      if(this.ProductList[i].id==prd.id)
      this.ProductList[i]=prd
     // console.log(this.ProductList[i])
    }
    //console.log(this.ProductList)
    
  }
 
}
