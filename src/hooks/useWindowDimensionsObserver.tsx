import { useEffect, useMemo, useState } from 'react'

import { isDesktop, isIOS, isWindowAvailable } from '@/utils/utils'

interface WindowDimensionsObserverValues {
  width: number
  height: number
  isMobile: boolean
  isXXLUp: boolean
  isXLUp: boolean
  isLGUp: boolean
  isMDUp: boolean
  isSMUp: boolean
}

enum Breakpoints {
  XXL = 1513,
  XL = 1280,
  LG = 1024,
  MD = 768,
  SM = 640,
}

const MOBILE_BREAKPOINT = 435

export const useWindowDimensionsObserver = (): WindowDimensionsObserverValues => {
  const [width, setWidth] = useState<number>(MOBILE_BREAKPOINT + 1) // isMobile defaults to false
  const [height, setHeight] = useState<number>(0)

  const isIphone = useMemo(() => isIOS() && !isDesktop(), [])

  useEffect(() => {
    if (!isWindowAvailable()) {
      return
    }

    function handleResize() {
      setWidth(isIphone ? screen.width : window.innerWidth)
      setHeight(window.innerHeight)
    }

    function checkWidthOnVisible() {
      if (!document.hidden) {
        handleResize()
      }
    }

    window.addEventListener('resize', checkWidthOnVisible)
    checkWidthOnVisible()

    return () => {
      window.removeEventListener('resize', checkWidthOnVisible)
    }
  }, [isIphone])

  const isMobile = useMemo(() => width <= MOBILE_BREAKPOINT, [width])

  // Tailwind CSS friendly values
  const isXXLUp = useMemo(() => width >= Breakpoints.XXL, [width])
  const isXLUp = useMemo(() => width >= Breakpoints.XL, [width])
  const isLGUp = useMemo(() => width >= Breakpoints.LG, [width])
  const isMDUp = useMemo(() => width >= Breakpoints.MD, [width])
  const isSMUp = useMemo(() => width >= Breakpoints.SM, [width])

  return {
    width,
    height,
    isMobile,
    isXXLUp,
    isXLUp,
    isLGUp,
    isMDUp,
    isSMUp,
  }
}

export default useWindowDimensionsObserver
