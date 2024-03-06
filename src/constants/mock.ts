import { GiftCard } from '@/types/giftCard'
import { CardType } from '@/types/battleCard'
import type { TBattleCardVoucher, TBattleCardPic } from '@/types/battleCard'
import { GiftVouncher } from '@/types/giftVouncher'
import { CryptoData } from '@/types/cryptoData'

export const GIFT_CARDS: Array<GiftCard> = [
  {
    label: 'GiftCard1',
    image: '/assets/images/giftcard/giftcard1.webp',
  },
  {
    label: 'GiftCard2',
    image: '/assets/images/giftcard/giftcard2.webp',
  },
  {
    label: 'GiftCard3',
    image: '/assets/images/giftcard/giftcard3.webp',
  },
  {
    label: 'GiftCard4',
    image: '/assets/images/giftcard/giftcard1.webp',
  },
  {
    label: 'GiftCard5',
    image: '/assets/images/giftcard/giftcard2.webp',
  },
  {
    label: 'GiftCard6',
    image: '/assets/images/giftcard/giftcard3.webp',
  },
  {
    label: 'GiftCard7',
    image: '/assets/images/giftcard/giftcard1.webp',
  },
  {
    label: 'GiftCard8',
    image: '/assets/images/giftcard/giftcard2.webp',
  },
  {
    label: 'GiftCard9',
    image: '/assets/images/giftcard/giftcard3.webp',
  },
  {
    label: 'GiftCard10',
    image: '/assets/images/giftcard/giftcard1.webp',
  },
  {
    label: 'GiftCard11',
    image: '/assets/images/giftcard/giftcard2.webp',
  },
  {
    label: 'GiftCard12',
    image: '/assets/images/giftcard/giftcard3.webp',
  },
]

export const BATTLE_CARDS: Array<any> = [
  {
    label: 'BattleCard1'
  },
  {
    label: 'BattleCard2'
  },
  {
    label: 'BattleCard3'
  },
  {
    label: 'BattleCard4'
  },
  {
    label: 'BattleCard5'
  },
  {
    label: 'BattleCard6'
  }
]

export const BATTLE_CARDS_BIG: Array<any> = [
  {
    label: 'BattleCard1'
  },
  {
    label: 'BattleCard2'
  },
  {
    label: 'BattleCard3'
  }
]

export const BATTLE_CARDS_MONEY_PIC_DOWN: Array<TBattleCardVoucher> = [
  {
    imageUrl: '/assets/images/battles/vounchermodel.webp',
    percentage: 75.0006,
    cardType: CardType.VOUCHER,
    price: 0.01
  },
  {
    imageUrl: '/assets/images/battles/vounchermodel.webp',
    percentage: 0,
    cardType: CardType.VOUCHER,
    price: 0.01
  },
  {
    imageUrl: '/assets/images/battles/vounchermodel.webp',
    percentage: 0,
    cardType: CardType.VOUCHER,
    price: 0.01
  }
]

export const BATTLE_CARDS_PIC: Array<TBattleCardPic> = [
  {
    imageUrl: '/assets/images/battles/luxury.webp'
  },
  {
    imageUrl: '/assets/images/battles/luxury.webp'
  },
  {
    imageUrl: '/assets/images/battles/luxury.webp'
  }
]

export const GIFT_VOUNCHERS: Array<GiftVouncher> = [
  {
    image: '/assets/images/giftvouncher/vouncherwatch.webp',
    labelHeader: 'Audemars Patek',
    labelContent: 'Royal Oak',
    price: '38450',
  },
  {
    image: '/assets/images/giftvouncher/vounchermodel.webp',
    labelHeader: 'Vouncher',
    labelContent: 'Wincrate',
    price: '5.00',
  },
  {
    image: '/assets/images/giftvouncher/vounchermodel.webp',
    labelHeader: 'Vouncher',
    labelContent: 'Wincrate',
    price: '0.02',
  },
  {
    image: '/assets/images/giftvouncher/vounchermodel.webp',
    labelHeader: 'Vouncher',
    labelContent: 'Wincrate',
    price: '1.00',
  },
  {
    image: '/assets/images/giftvouncher/vounchermodel.webp',
    labelHeader: 'Vouncher',
    labelContent: 'Wincrate',
    price: '0.10',
  },
  {
    image: '/assets/images/giftvouncher/vounchermodel.webp',
    labelHeader: 'Vouncher',
    labelContent: 'Wincrate',
    price: '0.05',
  },
  {
    image: '/assets/images/giftvouncher/vounchermodel.webp',
    labelHeader: 'Vouncher',
    labelContent: 'Wincrate',
    price: '0.50',
  },
  {
    image: '/assets/images/giftvouncher/vounchermodel.webp',
    labelHeader: 'Vouncher',
    labelContent: 'Wincrate',
    price: '10.00',
  },
  {
    image: '/assets/images/giftvouncher/vounchermodel.webp',
    labelHeader: 'Vouncher',
    labelContent: 'Wincrate',
    price: '3.00',
  },
]

export const CRYPTO_DATAS: Array<CryptoData> = [
  {
    header: '.22 BTC',
    transactionID: '802655171961',
    amountUSD: '$8303.20',
    status: 'PROCESSED',
    image: '/assets/images/cryptoicon/BTC.webp',
  },
  {
    header: '2.5 ETH',
    transactionID: '802655171961',
    amountUSD: '$5345.32',
    status: 'PROCESSED',
    image: '/assets/images/cryptoicon/ETH.webp',
  },
  {
    header: '0.4 ETH',
    transactionID: '802655171961',
    amountUSD: '$1266.78',
    status: 'PROCESSED',
    image: '/assets/images/cryptoicon/ETH.webp',
  },
]