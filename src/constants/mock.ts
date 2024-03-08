import { GiftCard } from '@/types/giftCard'
import { CardType } from '@/types/battleCard'
import type { TBattleCardVoucher, TBattleCardPic } from '@/types/battleCard'
import { GiftVoucher } from '@/types/giftVoucher'
import { CryptoData } from '@/types/cryptoData'
import { PackHistory } from '@/types/packHistory'
import { AffiliateCard } from '@/types/affiliateCard'
import { AffiliateInfor } from '@/types/affiliateInfor'
import { IRaceCardType } from '@/types/raceCard'
import { LevelCard } from '@/types/levelCard'
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
    label: 'BattleCard1',
  },
  {
    label: 'BattleCard2',
  },
  {
    label: 'BattleCard3',
  },
  {
    label: 'BattleCard4',
  },
  {
    label: 'BattleCard5',
  },
  {
    label: 'BattleCard6',
  },
]

export const BATTLE_CARDS_BIG: Array<any> = [
  {
    label: 'BattleCard1',
  },
  {
    label: 'BattleCard2',
  },
  {
    label: 'BattleCard3',
  },
]

export const CRATES_PAGE: Array<any> = [
  {
    label: 'CratesPage1',
  },
  {
    label: 'CratesPage2',
  },
  {
    label: 'CratesPage3',
  },
  {
    label: 'CratesPage4',
  },
  {
    label: 'CratesPage5',
  },
  {
    label: 'CratesPage6',
  },
  {
    label: 'CratesPage7',
  },
  {
    label: 'CratesPage8',
  },
  {
    label: 'CratesPage9',
  },
  {
    label: 'CratesPage10',
  },
  {
    label: 'CratesPage11',
  },
  {
    label: 'CratesPage12',
  },
  {
    label: 'CratesPage13',
  },
  {
    label: 'CratesPage14',
  },
  {
    label: 'CratesPage15',
  },
]

export const BATTLE_CARDS_MONEY_PIC_DOWN: Array<TBattleCardVoucher> = [
  {
    imageUrl: '/assets/images/battles/vouchermodel.webp',
    percentage: 75.0006,
    cardType: CardType.VOUCHER,
    price: 0.01,
  },
  {
    imageUrl: '/assets/images/battles/vouchermodel.webp',
    percentage: 0,
    cardType: CardType.VOUCHER,
    price: 0.01,
  },
  {
    imageUrl: '/assets/images/battles/vouchermodel.webp',
    percentage: 0,
    cardType: CardType.VOUCHER,
    price: 0.01,
  },
]

export const BATTLE_CARDS_PIC: Array<TBattleCardPic> = [
  {
    imageUrl: '/assets/images/battles/luxury.webp',
  },
  {
    imageUrl: '/assets/images/battles/luxury.webp',
  },
  {
    imageUrl: '/assets/images/battles/luxury.webp',
  },
]

export const GIFT_VOUCHERS: Array<GiftVoucher> = [
  {
    image: '/assets/images/giftvoucher/voucherwatch.webp',
    labelHeader: 'Audemars Patek',
    labelContent: 'Royal Oak',
    price: '38450',
  },
  {
    image: '/assets/images/giftvoucher/vouchermodel.webp',
    labelHeader: 'Voucher',
    labelContent: 'Wincrate',
    price: '5.00',
  },
  {
    image: '/assets/images/giftvoucher/vouchermodel.webp',
    labelHeader: 'Voucher',
    labelContent: 'Wincrate',
    price: '0.02',
  },
  {
    image: '/assets/images/giftvoucher/vouchermodel.webp',
    labelHeader: 'Voucher',
    labelContent: 'Wincrate',
    price: '1.00',
  },
  {
    image: '/assets/images/giftvoucher/vouchermodel.webp',
    labelHeader: 'Voucher',
    labelContent: 'Wincrate',
    price: '0.10',
  },
  {
    image: '/assets/images/giftvoucher/vouchermodel.webp',
    labelHeader: 'Voucher',
    labelContent: 'Wincrate',
    price: '0.05',
  },
  {
    image: '/assets/images/giftvoucher/vouchermodel.webp',
    labelHeader: 'Voucher',
    labelContent: 'Wincrate',
    price: '0.50',
  },
  {
    image: '/assets/images/giftvoucher/vouchermodel.webp',
    labelHeader: 'Voucher',
    labelContent: 'Wincrate',
    price: '10.00',
  },
  {
    image: '/assets/images/giftvoucher/vouchermodel.webp',
    labelHeader: 'Voucher',
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

export const FIAT_DATAS: Array<CryptoData> = [
  {
    header: '15 USD',
    transactionID: '802655171961',
    amountUSD: '$15.00',
    status: 'PROCESSED',
    image: '/assets/images/cryptoicon/coin.webp',
  },
  {
    header: '15 USD',
    transactionID: '802655171961',
    amountUSD: '$15.00',
    status: 'PROCESSED',
    image: '/assets/images/cryptoicon/coin.webp',
  },
  {
    header: '15 USD',
    transactionID: '802655171961',
    amountUSD: '$15.00',
    status: 'PROCESSED',
    image: '/assets/images/cryptoicon/coin.webp',
  },
]

export const WITHDRAWALS: Array<CryptoData> = [
  {
    header: '-$3549.43',
    transactionID: '802655171961',
    amountUSD: '-$3549.43',
    status: 'PROCESSED',
    image: '/assets/images/cryptoicon/coin.webp',
  },
  {
    header: '-$3549.43',
    transactionID: '802655171961',
    amountUSD: '-$3549.43',
    status: 'PROCESSED',
    image: '/assets/images/cryptoicon/coin.webp',
  },
  {
    header: '-$3549.43',
    transactionID: '802655171961',
    amountUSD: '-$3549.43',
    status: 'PROCESSED',
    image: '/assets/images/cryptoicon/coin.webp',
  },
]

export const PACK_HISTORYS: Array<PackHistory> = [
  {
    header: '$33549.43',
    cardName: 'Luxury',
    amountUSD: '$2346.48',
    cardStatus: 'Won',
    cardImage: '/assets/images/giftcard/giftcard1.webp',
    presentImage: '/assets/images/giftvoucher/voucherwatch.webp',
  },
  {
    header: '$33549.43',
    cardName: 'Luxury',
    amountUSD: '$2346.48',
    cardStatus: 'Won',
    cardImage: '/assets/images/giftcard/giftcard1.webp',
    presentImage: '/assets/images/giftvoucher/voucherwatch.webp',
  },
  {
    header: '$33549.43',
    cardName: 'Luxury',
    amountUSD: '$2346.48',
    cardStatus: 'Won',
    cardImage: '/assets/images/giftcard/giftcard1.webp',
    presentImage: '/assets/images/giftvoucher/voucherwatch.webp',
  },
  {
    header: '$33549.43',
    cardName: 'Luxury',
    amountUSD: '$2346.48',
    cardStatus: 'Won',
    cardImage: '/assets/images/giftcard/giftcard1.webp',
    presentImage: '/assets/images/giftvoucher/voucherwatch.webp',
  },
]

export const AFFILIATECARDS: Array<AffiliateCard> = [
  {
    label: 'Affiliate Code',
    value: 3455433,
    color: 'yellow',
  },
  {
    label: 'Users',
    value: 126,
    color: 'default',
  },
  {
    label: 'Total Earnings',
    value: 43879.98,
    prefixSymbol: '$',
    color: 'default',
  },
  {
    label: 'Unclaimed Earnings',
    value: 300.43,
    prefixSymbol: '$',
    color: 'default',
  },
]

export const AFFILIATEINFORS: Array<AffiliateInfor> = [
  {
    user: 'Best_Gamer544',
    deposited: '$460',
    opened: '$321.83',
    commision: '+ $45.83',
  },
  {
    user: 'Best_Gamer544',
    deposited: '$460',
    opened: '$321.83',
    commision: '+ $45.83',
  },
]

export const LEVEL_CARDS: Array<LevelCard> = [
  {
    label: 'level2',
    image: '/assets/images/levelcard/level2.webp',
    caption: 'Free Level 2',
  },
  {
    label: 'level10',
    image: '/assets/images/levelcard/level10.webp',
    caption: 'Free Level 10',
  },
  {
    label: 'level20',
    image: '/assets/images/levelcard/level20.webp',
    caption: 'Free Level 20',
  },
  {
    label: 'level30',
    image: '/assets/images/levelcard/level30.webp',
    caption: 'Free Level 30',
  },
  {
    label: 'level40',
    image: '/assets/images/levelcard/level40.webp',
    caption: 'Free Level 40',
  },
  {
    label: 'level50',
    image: '/assets/images/levelcard/level50.webp',
    caption: 'Free Level 50',
  },
  {
    label: 'level60',
    image: '/assets/images/levelcard/level60.webp',
    caption: 'Free Level 60',
  },
  {
    label: 'level70',
    image: '/assets/images/levelcard/level70.webp',
    caption: 'Free Level 70',
  },
  {
    label: 'level80',
    image: '/assets/images/levelcard/level80.webp',
    caption: 'Free Level 80',
  },
  {
    label: 'level90',
    image: '/assets/images/levelcard/level90.webp',
    caption: 'Free Level 90',
  },
  {
    label: 'level100',
    image: '/assets/images/levelcard/level100.webp',
    caption: 'Free Level 100',
  },
]

export const RaceCards : Array<IRaceCardType> = [
  {
    avatar : '/assets/images/battles/avatar3.webp',
    name : 'Colins',
    amount : 1230922,
    reward : 1000
  },
  {
    avatar : '/assets/images/battles/avatar1.webp',
    name : 'James',
    amount : 1230922,
    reward : 500
  },
  {
    avatar : '/assets/images/battles/avatar4.webp',
    name : 'Robert',
    amount : 1230922,
    reward : 300
  },
  {
    avatar : '/assets/images/battles/avatar2.webp',
    name : 'Hellen',
    amount : 1230922,
    reward : 150
  },
  {
    avatar : '/assets/images/battles/avatar1.webp',
    name : 'Judy',
    amount : 1230922,
    reward : 100
  },
  {
    avatar : '/assets/images/battles/avatar3.webp',
    name : 'Andrey',
    amount : 1230922,
    reward : 100
  },
  {
    avatar : '/assets/images/battles/avatar4.webp',
    name : 'Dmitrije',
    amount : 1230922,
    reward : 100
  },
  {
    avatar : '/assets/images/battles/avatar2.webp',
    name : 'Jovan',
    amount : 1230922,
    reward : 100
  },
  {
    avatar : '/assets/images/battles/avatar3.webp',
    name : 'Alex',
    amount : 1230922,
    reward : 100
  },
  {
    avatar : '/assets/images/battles/avatar1.webp',
    name : 'Yuri',
    amount : 1230922,
    reward : 100
  }
]
