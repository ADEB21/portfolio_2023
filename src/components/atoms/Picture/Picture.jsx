import React from 'react'
import {BREAKPOINTS} from "../../../assets/scripts/utils/variables"
import "./picture.scss"

function Picture({img, alt, width, height}) {
  return (
    <picture>
    <source
      type="image/webp"
      media={`(max-width: ${BREAKPOINTS.tablet - 1}px)`}
      srcSet={`${img[0]} 1x, ${img[0]} 2x`}
    />
    <source
      type="image/webp"
      media={`(min-width: ${BREAKPOINTS.tablet}px)`}
      srcSet={`${img[0]} 1x, ${img[0]} 2x`}
    />

    <source
      type="image/jpeg"
      media={`(max-width: ${BREAKPOINTS.desktop - 1}px)`}
      srcSet={`${img[0]} 1x, ${img[0]} 2x`}
    />
    <source
      type="image/jpeg"
      media={`(min-width: ${BREAKPOINTS.desktop}px)`}
      srcSet={`${img[0]} 1x, ${img[0]} 2x`}
    />
    <img
      src={img[1]}
      alt={alt}
      width={width}
      height={height}
    />
  </picture>
  )
}

export default Picture