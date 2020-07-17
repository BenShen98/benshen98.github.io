import React from 'react';
import AbstractIcon from 'icons/AbstractIcon'


const svg = (
  <svg viewBox="-10 0 66 66.000000">
  <g transform="translate(0.000000,66.000000) scale(0.100000,-0.100000)"
  fill="#000000" stroke="none">
  <path d="M180 565 c0 -25 -1 -25 -90 -25 l-90 0 0 -140 0 -140 215 0 215 0 0
  140 0 140 -95 0 c-95 0 -95 0 -95 25 0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25z
  m190 -165 l0 -80 -155 0 -155 0 0 80 0 80 155 0 155 0 0 -80z"/>
  <path d="M55 179 c-50 -47 -54 -58 -25 -84 20 -18 21 -18 45 5 l25 23 0 -61 0
  -62 30 0 30 0 0 110 0 110 -30 0 c-22 0 -43 -12 -75 -41z"/>
  <path d="M270 110 l0 -110 30 0 30 0 0 62 0 61 25 -23 25 -24 22 22 22 22 -49
  50 c-36 36 -57 50 -77 50 l-28 0 0 -110z"/>
  </g>
  </svg>
  )

export default (props) => {
  return (<AbstractIcon
    {...props}
    svg={svg}
    title="BrickPi"
    href="https://www.dexterindustries.com/brickpi/"
  />)
}