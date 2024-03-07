export interface IRaceCardType {
  avatar : string
  name : string
  amount : number
  reward : number
  // color : 'yellow' | 'default'
}

export interface IRaceCardElement {
  raceCards : Array<IRaceCardType>
  winnerFlag : any
}


export interface IRaceCardHeadType {
  avatar : string
  timestamp : any
}