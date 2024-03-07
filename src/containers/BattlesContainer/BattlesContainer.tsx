import BattleCard from '@/components/BattleCard'
import BattleCard1 from '@/components/BattleCard'
import { BattleOption, BattleType } from '@/components/BattleCard/BattleCard'

const BattlesContainer = () => {
  return (
    <div>
      <BattleCard
        packs={[
          {
            id: '1',
            imageUrl: '/',
            price: '5',
            detail: {},
          },
          {
            id: '1',
            imageUrl: '/',
            price: '5',
            detail: {},
          },
          {
            id: '1',
            imageUrl: '/',
            price: '5',
            detail: {},
          },
          {
            id: '1',
            imageUrl: '/',
            price: '5',
            detail: {},
          },
          {
            id: '1',
            imageUrl: '/',
            price: '5',
            detail: {},
          },
          {
            id: '1',
            imageUrl: '/',
            price: '5',
            detail: {},
          },
          {
            id: '1',
            imageUrl: '/',
            price: '5',
            detail: {},
          },
        ]}
        type={BattleType.ONE_ONE}
        userList={[]}
        option={BattleOption.SHARE_PROFIT}
      />
    </div>
  )
}

export default BattlesContainer
