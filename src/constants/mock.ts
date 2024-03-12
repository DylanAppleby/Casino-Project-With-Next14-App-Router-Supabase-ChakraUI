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
import { SlotGameItem } from '@/types/slotGameItem'
import { SlotGameRecentItem } from '@/types/slotGameRecentItem'

export const GIFT_CARDS: Array<GiftCard> = [
  {
    label: 'GiftCard1',
    image: '/assets/images/giftcard/giftcard1.webp',
    price: 2165.12,
    giftCardId: 'id1',
  },
  {
    label: 'GiftCard2',
    image: '/assets/images/giftcard/giftcard2.webp',
    price: 4315.34,
    giftCardId: 'id2',
  },
  {
    label: 'GiftCard3',
    image: '/assets/images/giftcard/giftcard3.webp',
    price: 6541.32,
    giftCardId: 'id3',
  },
  {
    label: 'GiftCard4',
    image: '/assets/images/giftcard/giftcard1.webp',
    price: 1117.43,
    giftCardId: 'id4',
  },
  {
    label: 'GiftCard5',
    image: '/assets/images/giftcard/giftcard2.webp',
    price: 6541.32,
    giftCardId: 'id5',
  },
  {
    label: 'GiftCard6',
    image: '/assets/images/giftcard/giftcard3.webp',
    price: 6541.32,
    giftCardId: 'id6',
  },
  {
    label: 'GiftCard7',
    image: '/assets/images/giftcard/giftcard1.webp',
    price: 6541.32,
    giftCardId: 'id7',
  },
  {
    label: 'GiftCard8',
    image: '/assets/images/giftcard/giftcard2.webp',
    price: 6541.32,
    giftCardId: 'id8',
  },
  {
    label: 'GiftCard9',
    image: '/assets/images/giftcard/giftcard3.webp',
    price: 6541.32,
    giftCardId: 'id9',
  },
  {
    label: 'GiftCard10',
    image: '/assets/images/giftcard/giftcard1.webp',
    price: 6541.32,
    giftCardId: 'id10',
  },
  {
    label: 'GiftCard11',
    image: '/assets/images/giftcard/giftcard2.webp',
    price: 6541.32,
    giftCardId: 'id11',
  },
  {
    label: 'GiftCard12',
    image: '/assets/images/giftcard/giftcard3.webp',
    price: 6541.32,
    giftCardId: 'id12',
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

export const RaceCards: Array<IRaceCardType> = [
  {
    avatar: '/assets/images/battles/avatar3.webp',
    name: 'Colins',
    amount: 1230922,
    reward: 1000,
  },
  {
    avatar: '/assets/images/battles/avatar1.webp',
    name: 'James',
    amount: 1230922,
    reward: 500,
  },
  {
    avatar: '/assets/images/battles/avatar4.webp',
    name: 'Robert',
    amount: 1230922,
    reward: 300,
  },
  {
    avatar: '/assets/images/battles/avatar2.webp',
    name: 'Hellen',
    amount: 1230922,
    reward: 150,
  },
  {
    avatar: '/assets/images/battles/avatar1.webp',
    name: 'Judy',
    amount: 1230922,
    reward: 100,
  },
  {
    avatar: '/assets/images/battles/avatar3.webp',
    name: 'Andrey',
    amount: 1230922,
    reward: 100,
  },
  {
    avatar: '/assets/images/battles/avatar4.webp',
    name: 'Dmitrije',
    amount: 1230922,
    reward: 100,
  },
  {
    avatar: '/assets/images/battles/avatar2.webp',
    name: 'Jovan',
    amount: 1230922,
    reward: 100,
  },
  {
    avatar: '/assets/images/battles/avatar3.webp',
    name: 'Alex',
    amount: 1230922,
    reward: 100,
  },
  {
    avatar: '/assets/images/battles/avatar1.webp',
    name: 'Yuri',
    amount: 1230922,
    reward: 100,
  },
]

export const RECOMMNEDED_BOXS: Array<GiftCard> = [
  {
    label: 'GiftCard1',
    image: '/assets/images/giftcard/giftcard1.webp',
    price: 5168.99,
    giftCardId: 'id1',
  },
  {
    label: 'GiftCard2',
    image: '/assets/images/giftcard/giftcard2.webp',
    price: 4058.07,
    giftCardId: 'id2',
  },
  {
    label: 'GiftCard3',
    image: '/assets/images/giftcard/giftcard1.webp',
    price: 3581.71,
    giftCardId: 'id3',
  },
  {
    label: 'GiftCard4',
    image: '/assets/images/giftcard/giftcard2.webp',
    price: 2870.76,
    giftCardId: 'id4',
  },
  {
    label: 'GiftCard5',
    image: '/assets/images/giftcard/giftcard1.webp',
    price: 2465.64,
    giftCardId: 'id5',
  },
  {
    label: 'GiftCard6',
    image: '/assets/images/giftcard/giftcard2.webp',
    price: 2165.32,
    giftCardId: 'id6',
  },
  {
    label: 'GiftCard7',
    image: '/assets/images/giftcard/giftcard1.webp',
    price: 1665.61,
    giftCardId: 'id7',
  },
  {
    label: 'GiftCard8',
    image: '/assets/images/giftcard/giftcard2.webp',
    price: 1340.23,
    giftCardId: 'id8',
  },
  {
    label: 'GiftCard9',
    image: '/assets/images/giftcard/giftcard1.webp',
    price: 1285.92,
    giftCardId: 'id9',
  },
  {
    label: 'GiftCard10',
    image: '/assets/images/giftcard/giftcard2.webp',
    price: 1117.41,
    giftCardId: 'id10',
  },
  {
    label: 'GiftCard11',
    image: '/assets/images/giftcard/giftcard1.webp',
    price: 1987.43,
    giftCardId: 'id11',
  },
  {
    label: 'GiftCard12',
    image: '/assets/images/giftcard/giftcard2.webp',
    price: 988.65,
    giftCardId: 'id12',
  },
  {
    label: 'GiftCard13',
    image: '/assets/images/giftcard/giftcard1.webp',
    price: 4034.13,
    giftCardId: 'id13',
  },
  {
    label: 'GiftCard14',
    image: '/assets/images/giftcard/giftcard2.webp',
    price: 2354.21,
    giftCardId: 'id14',
  },
  {
    label: 'GiftCard15',
    image: '/assets/images/giftcard/giftcard1.webp',
    price: 1285.92,
    giftCardId: 'id15',
  },
]

export const SLOT_GAME_ITEMS: Array<SlotGameItem> = [
  {
    percentage: '0.1500%',
    imageUrl: '/assets/images/slot/1.webp',
    collection: 'Daytona Stainless...',
    brand: 'Rolex',
    price: 17500,
  },
  {
    percentage: '0.1500%',
    imageUrl: '/assets/images/slot/2.webp',
    collection: 'Daytona Stainless...',
    brand: 'Rolex',
    price: 17500,
  },
  {
    percentage: '0.1500%',
    imageUrl: '/assets/images/slot/3.webp',
    collection: 'Daytona Stainless...',
    brand: 'Rolex',
    price: 17500,
  },
  {
    percentage: '0.1500%',
    imageUrl: '/assets/images/slot/4.webp',
    collection: 'Daytona Stainless...',
    brand: 'Rolex',
    price: 17500,
  },
  {
    percentage: '0.1500%',
    imageUrl: '/assets/images/slot/5.webp',
    collection: 'Daytona Stainless...',
    brand: 'Rolex',
    price: 17500,
  },
  {
    percentage: '0.1500%',
    imageUrl: '/assets/images/slot/6.webp',
    collection: 'Daytona Stainless...',
    brand: 'Rolex',
    price: 17500,
  },
  {
    percentage: '0.1500%',
    imageUrl: '/assets/images/slot/7.webp',
    collection: 'Daytona Stainless...',
    brand: 'Rolex',
    price: 17500,
  },
  {
    percentage: '0.1500%',
    imageUrl: '/assets/images/slot/8.webp',
    collection: 'Daytona Stainless...',
    brand: 'Rolex',
    price: 17500,
  },
  {
    percentage: '0.1500%',
    imageUrl: '/assets/images/slot/9.webp',
    collection: 'Daytona Stainless...',
    brand: 'Rolex',
    price: 17500,
  },
  {
    percentage: '0.1500%',
    imageUrl: '/assets/images/slot/10.webp',
    collection: 'Daytona Stainless...',
    brand: 'Rolex',
    price: 17500,
  },
]

export const SLOT_GAME_RECENT_ITEMS: Array<SlotGameRecentItem> = [
  {
    bigbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(241,194,66,1) 0%, rgba(31,26,11,1) 100%)',
    smallbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(101,79,29,1) 0%, rgba(28,29,31,1) 100%)',
    imageUrl: '/assets/images/slot/1.webp',
    price: 17500,
  },
  {
    bigbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(91,19,40,1) 0%, rgba(20,11,14,1) 100%)',
    smallbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(47,31,38,1) 0%, rgba(39,37,38,1) 100%)',
    imageUrl: '/assets/images/slot/2.webp',
    price: 17500,
  },
  {
    bigbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(71,101,128,1) 0%, rgba(11,16,22,1) 100%)',
    smallbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(48,54,63,1) 0%, rgba(29,30,32,1) 100%)',
    imageUrl: '/assets/images/slot/3.webp',
    price: 17500,
  },
  {
    bigbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(127,29,95,1) 0%, rgba(31,6,22,1) 100%)',
    smallbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(57,38,42,1) 0%, rgba(41,39,40,1) 100%)',
    imageUrl: '/assets/images/slot/7.webp',
    price: 17500,
  },
  {
    bigbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(135,79,57,1) 0%, rgba(32,27,12,1) 100%)',
    smallbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(54,41,36,1) 0%, rgba(31,31,29,1) 100%)',
    imageUrl: '/assets/images/slot/4.webp',
    price: 17500,
  },
  {
    bigbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(241,194,66,1) 0%, rgba(31,26,11,1) 100%)',
    smallbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(101,79,29,1) 0%, rgba(28,29,31,1) 100%)',
    imageUrl: '/assets/images/slot/1.webp',
    price: 17500,
  },
  {
    bigbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(91,19,40,1) 0%, rgba(20,11,14,1) 100%)',
    smallbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(47,31,38,1) 0%, rgba(39,37,38,1) 100%)',
    imageUrl: '/assets/images/slot/2.webp',
    price: 17500,
  },
  {
    bigbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(71,101,128,1) 0%, rgba(11,16,22,1) 100%)',
    smallbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(48,54,63,1) 0%, rgba(29,30,32,1) 100%)',
    imageUrl: '/assets/images/slot/3.webp',
    price: 17500,
  },
  {
    bigbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(127,29,95,1) 0%, rgba(31,6,22,1) 100%)',
    smallbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(57,38,42,1) 0%, rgba(41,39,40,1) 100%)',
    imageUrl: '/assets/images/slot/7.webp',
    price: 17500,
  },
  {
    bigbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(135,79,57,1) 0%, rgba(32,27,12,1) 100%)',
    smallbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(54,41,36,1) 0%, rgba(31,31,29,1) 100%)',
    imageUrl: '/assets/images/slot/4.webp',
    price: 17500,
  },
  {
    bigbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(241,194,66,1) 0%, rgba(31,26,11,1) 100%)',
    smallbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(101,79,29,1) 0%, rgba(28,29,31,1) 100%)',
    imageUrl: '/assets/images/slot/1.webp',
    price: 17500,
  },
  {
    bigbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(91,19,40,1) 0%, rgba(20,11,14,1) 100%)',
    smallbgUrl: 'linear-gradient(180deg, rgba(73,60,29,1) 0%, rgba(47,31,38,1) 0%, rgba(39,37,38,1) 100%)',
    imageUrl: '/assets/images/slot/2.webp',
    price: 17500,
  },
]
