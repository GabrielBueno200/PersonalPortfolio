import { useEffect, useRef, useState } from 'react'
import RandomizedStringRain from './RandomizedStringRain'
import _ from 'lodash'

interface IMatrixRainProps {
  opacity: number
}

const MatrixRain = ({ opacity }: IMatrixRainProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const boundingClientRect = containerRef!.current!.getBoundingClientRect()

    setContainerSize({
      width: boundingClientRect.width,
      height: boundingClientRect.height
    })
  }, [])

  const randomStringCount = containerSize
    ? Math.floor(containerSize.width / 22)
    : 0

  return (
    <div
      className={`
        fixed
        bottom-0 left-0 right-0 top-0
        flex
        justify-center
        overflow-hidden
        bg-black
        opacity-${opacity}
      `}
      ref={containerRef}
    >
      {_.times(randomStringCount, index => (
        <div
          key={index}
          className="
            select-none
            whitespace-nowrap
            bg-black
            text-[30px]
            text-primary-green
          "
          style={{
            textOrientation: 'upright',
            writingMode: 'vertical-rl',
            textShadow: '0px 0px 8px rgba(32, 194, 14, 0.8)'
          }}
        >
          <RandomizedStringRain containerHeight={containerSize.height} />
        </div>
      ))}
    </div>
  )
}

export default MatrixRain

