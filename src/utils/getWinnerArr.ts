import { IRaceCardType } from "@/types/raceCard"

const getWinnerArr = (arr : Array<IRaceCardType>) => {
    return [arr[1], arr[0], arr[2]]
}

export default getWinnerArr