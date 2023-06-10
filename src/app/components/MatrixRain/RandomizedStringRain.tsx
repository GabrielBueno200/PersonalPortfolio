import _ from 'lodash'
import { useEffect, useState } from 'react'
import useInterval from '@use-it/interval'

const validChars = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`

const minRandomStringSize = 15
const maxRandomStringSize = 35

const minIntervalDelay = 50
const maxIntervalDelay = 100

const minDelayBetweenStrings = 0
const maxDelayBetweenStrings = 4000

interface IRandomizedStringRainProps {
  containerHeight: number
}

const RandomizedStringRain = ({ containerHeight }: IRandomizedStringRainProps) => {
  const getRandomChar = () => _.sample(validChars)!

  const getRandomStringFromChars = () =>
    _.sampleSize(validChars, _.random(minRandomStringSize, maxRandomStringSize))

  const getMutatedString = (string: string[]) => {
    const newString: string[] = []
    for (let i = 1; i < string.length; i++) {
      if (Math.random() < 0.02) {
        newString.push(getRandomChar())
      } else {
        newString.push(string[i])
      }
    }
    newString.push(getRandomChar())
    return newString
  }

  const [randomString, setRandomString] = useState(getRandomStringFromChars())
  const [topPadding, setTopPadding] = useState(randomString.length * -50)
  const [intervalDelay, setIntervalDelay] = useState<number | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setIntervalDelay(_.random(minIntervalDelay, maxIntervalDelay))
    }, _.random(minDelayBetweenStrings, maxDelayBetweenStrings))
  }, [])

  useInterval(() => {
    if (!containerHeight) return

    if (!intervalDelay) return

    if (topPadding > containerHeight) {
      setRandomString([])
      const newRandomString = getRandomStringFromChars()
      setRandomString(newRandomString)
      setTopPadding(newRandomString.length * -44)
      setIntervalDelay(null)
      setTimeout(() => {
        setIntervalDelay(_.random(minIntervalDelay, maxIntervalDelay))
      }, _.random(minDelayBetweenStrings, maxDelayBetweenStrings))
    } else {
      setTopPadding(topPadding + 44)
    }
    setRandomString(getMutatedString)
  }, intervalDelay)

  return (
    <>
      {randomString.map((char, index) => (
        <a
          className="-mt-[12px]"
          style={{
            opacity: index < 6 ? 0.1 + index * 0.15 : 1,
            color: index === randomString.length - 1 ? '#fff' : undefined,
            textShadow:
              index === randomString.length - 1
                ? '0px 0px 20px rgba(255, 255, 255, 1)'
                : undefined
          }}
        >
          {char}
        </a>
      ))}
    </>
  )
}

export default RandomizedStringRain
