import BattleCard from '@/components/BattleCard'
import { BattleOption, BattleType } from '@/components/BattleCard/BattleCard'
import { BATTLE_PACKS } from '@/constants/mock'

const BattlesContainer = () => {
  return (
    <BattleCard
      packs={BATTLE_PACKS}
      type={BattleType.ONE_ONE}
      userList={[]}
      option={BattleOption.SHARE_PROFIT}
    />
  )
}

export default BattlesContainer
