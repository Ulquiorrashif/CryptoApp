export interface ICard {
  id:string,
  amount: number,
  price: number,
  date: number,
  grow: boolean,
  growPercent: number,
  totalAmount: number,
  totalProfit: number,
}
export interface ICoin {
  id:string,
  amount: number,
  price: number,
  date: any,

}

export interface ITest {
  pd:string,

}
export  interface ICoinAPI{
  id: string,
  icon: string,
  name: string,
  symbol: string,
  rank: number,
  price: number,
  priceBtc:number,
  volume:number,
  marketCap: number,
  availableSupply: number,
  totalSupply:number,
  priceChange1h: number,
  priceChange1d:number,
  priceChange1w: number,
  redditUrl: string,
  websiteUrl: string,
  twitterUrl: string,
  contractAddress: string,
  decimals: number,
  explorers: string[]
}
