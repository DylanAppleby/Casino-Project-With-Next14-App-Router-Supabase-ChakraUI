import {Flex} from "@chakra-ui/react"
import RaceCard from "@/components/RaceCard"

export default function Race () {
    return (
        <Flex width={'full'} direction={'column'}>
            <RaceCard />
        </Flex>
    )
}