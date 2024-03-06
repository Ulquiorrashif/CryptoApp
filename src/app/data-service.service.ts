import {Injectable, OnInit} from '@angular/core';
import {ICard, ICoin} from "./entity/ICard";

import {HttpClient} from "@angular/common/http";
import {filter, map, pipe} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements OnInit{
  // private MyCoinList:ICoin[]|ICard[];
  // private DataList:any[];
  private Summ:number=0;
  constructor(private  httpService:HttpClient) {
    // this.MyCoinList=myCoinsList
    // console.log(this.MyCoinList)
    // this.DataList=cryptoData.result
    // console.log(this.DataList)
    //
    // this.MyCoinList=this.MyCoinList.map(item=>{
    //   const coin=this.DataList.find(elem=>elem.id==item.id)
    //   // console.log(item.amount)
    //   console.log(item.amount,coin.price,item.amount*coin.price,item)
    //   return{
    //     icon:coin.icon,
    //     grow: item.price<coin.price,
    //     growPercent: (coin.price-item.price)/item.price*100,
    //     totalAmount: item.amount*coin.price,
    //     totalProfit: item.amount*coin.price-item.price*item.amount,
    //     ...item
    //   }
    // })
    // console.log(this.MyCoinList)
    // this.MyCoinList.forEach(item=>{
    //   const coin =this.DataList.find(elem=>elem.id==item.id)
    //   this.Summ+=coin.price*item.amount})


  }
  getDataCoins(){
    // return this.MyCoinList
    return this.httpService.get('http://localhost:3000/').pipe(map((data:any)=>{
      let MyCoinList = data["myCoinsList"];
      let DataList = data["result"];
      MyCoinList=MyCoinList.map(item=>{
        const coin=DataList.find(elem=>elem.id==item.id)
        // console.log(item.amount)
        console.log(item.amount,coin.price,item.amount*coin.price,item)
        return{
          icon:coin.icon,
          grow: item.price<coin.price,
          growPercent: (coin.price-item.price)/item.price*100,
          totalAmount: item.amount*coin.price,
          totalProfit: item.amount*coin.price-item.price*item.amount,
          ...item
        }
      });
      console.log(MyCoinList,"aboba")
      MyCoinList.forEach(item=>{
          const coin =DataList.find(elem=>elem.id==item.id)
          this.Summ+=coin.price*item.amount})
      return MyCoinList
    }))
  }
  getDataApi(){
    // return this.DataList
    return this.httpService.get('http://localhost:3000/')
  }
  getSumm(){
    return this.httpService.get('http://localhost:3000/').pipe(map((data:any)=>{
      let MyCoinList = data["myCoinsList"];
      let DataList = data["result"];
      MyCoinList.forEach(item=>{
        const coin =DataList.find(elem=>elem.id==item.id)
        this.Summ+=coin.price*item.amount})
      return this.Summ
    }))

  }
  addAsset(asset){
    // const coin=this.DataList.find(elem=>elem.id==asset.id)
    // console.log(coin)
    // console.log(asset)
    // if (coin!==undefined){
    //   this.MyCoinList.push({
    //     icon:coin.icon,
    //     grow: asset.price<=coin.price,
    //     growPercent: (coin.price-asset.price)/asset.price*100,
    //     totalAmount: asset.amount*coin.price,
    //     totalProfit: asset.amount*coin.price-asset.price*asset.amount,
    //     ...asset
    //   })
    // }
    // "id": "bitcoin",
    //   "amount": 0.02,
    //   "price": 26244,
    //   "date": 26244
    const body = {id: asset.id, price:  parseFloat(asset.price),amount:parseFloat(asset.amount),date:asset.date};
    console.log(body)
    return this.httpService.post("http://localhost:3000/add", body);
    // this.getDataCoins().subscribe({next:(data: any) => data})
    // console.log(asset)

  }

  ngOnInit(): void {

  }

}
