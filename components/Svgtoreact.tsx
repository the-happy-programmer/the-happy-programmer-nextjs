import React, { ReactElement } from 'react'

interface SvgIconProps {
  name: string
  [key: string]: any
}

const SvgtoReact: React.FC<SvgIconProps> = ({
  name,
  ...props
}: SvgIconProps): ReactElement | null => {
  try {
    const svg = require(`../public/svg/${name}.svg`).default

    return React.createElement(svg, { ...props })
  } catch (error) {
    console.error(`SVG file not found for ${name}`)
    return null
  }
}

export default SvgtoReact
