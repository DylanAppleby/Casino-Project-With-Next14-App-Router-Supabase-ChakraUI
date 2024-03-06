export enum CardType {
  VOUCHER = 'voucher'
}

export type TBattleCardVoucher = {
  imageUrl: string
  percentage?: number
  cardType: CardType
  price: number
}

export type TBattleCardPic = {
  imageUrl: string
}