import { useCallback, useEffect, useMemo, useState } from 'react';

import { Directions } from '../utils/constants';

const CAROUSEL_GAP_WIDTH = 16;

const useScroll = (
  collectionListContainer: HTMLDivElement | null,
  scrollContainer = collectionListContainer,
  gapWidth?: number,
  isSimilarItemsCarousel?: boolean
) => {
  const [diffScroll, setDiffScroll] = useState(0);
  const [mainDiffScroll, setMainDiffScroll] = useState(0);

  const isContentOverflow = useMemo(() => {
    if (collectionListContainer) {
      return collectionListContainer.scrollWidth > collectionListContainer.offsetWidth;
    }

    return false;
  }, [collectionListContainer]);

  const onScrollClick = useCallback(
    (direction: string, isSimilarItemsCarousel = false) => {
      const gap = gapWidth ? gapWidth : CAROUSEL_GAP_WIDTH;
      if (
        !collectionListContainer ||
        !collectionListContainer.childNodes ||
        !collectionListContainer.childNodes.length
      )
        return;
      // TODO: figure out the width of the scrollable area for compare similar carousel
      let scrollWidth = isSimilarItemsCarousel
        ? (
            collectionListContainer.childNodes[0].childNodes[0].childNodes[0]
              .childNodes[0] as HTMLTableCellElement
          ).offsetWidth
        : (collectionListContainer.childNodes[0] as HTMLDivElement).offsetWidth;
      if (!scrollWidth) {
        return;
      } else {
        scrollWidth = scrollWidth + gap;
      }

      scrollWidth *= direction == 'left' ? -1 : 1;
      if (scrollContainer && scrollContainer.scrollTo) {
        scrollContainer.scrollTo({
          left: scrollContainer.scrollLeft + scrollWidth,
          behavior: 'smooth'
        });
      }

      if (direction == Directions.LEFT && diffScroll !== 0) {
        setDiffScroll((prev) => prev + 1);
      }

      if (
        direction == Directions.RIGHT &&
        (mainDiffScroll + diffScroll !== 0 || diffScroll === 0)
      ) {
        setDiffScroll((prev) => prev - 1);
      }
    },
    [collectionListContainer, diffScroll, gapWidth, mainDiffScroll, scrollContainer]
  );

  useEffect(() => {
    let differenceToScroll: number;

    if (collectionListContainer && collectionListContainer.childNodes) {
      const totalNoOfTiles = isSimilarItemsCarousel
        ? collectionListContainer.childNodes[0].childNodes[0].childNodes[0]?.childNodes
            .length
        : collectionListContainer.childNodes.length;
      const perScreenTiles =
        collectionListContainer.clientWidth /
        (isSimilarItemsCarousel
          ? (collectionListContainer.childNodes[0].childNodes[0].childNodes[0]
              ?.childNodes[0] as HTMLTableCellElement)
          : (collectionListContainer.childNodes[0] as HTMLDivElement)
        )?.offsetWidth;
      differenceToScroll = totalNoOfTiles - Math.floor(perScreenTiles);

      setMainDiffScroll(differenceToScroll);
    }
  }, [collectionListContainer, diffScroll]);

  return {
    isContentOverflow,
    diffScroll,
    mainDiffScroll,
    onScrollClick
  };
};

export default useScroll;
