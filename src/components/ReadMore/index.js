// Write your code here
import {useState} from 'react'

import {
  MainBackgroundContainer,
  ImageContainer,
  Container,
  Button,
  Para,
  Heading,
} from './styledComponents'

const text =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing you component hierarchy. Hooks work side-by-side with existing code so you can adapt them gradually.'

const inital = text.slice(0, 170)
const description = text.slice(0, text.length)
const ReadMore = () => {
  const [readMore, setterFunction] = useState(false)

  const onClickButton = event => {
    setterFunction(prev => !prev)
  }

  const buttontext = readMore ? 'Read less' : 'Read more'

  const textDisplay = readMore ? description : inital

  return (
    <MainBackgroundContainer>
      <Container>
        <Heading>React Hooks</Heading>
        <Para>Hooks are a new addition to React</Para>
        <ImageContainer
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Para>{textDisplay}</Para>
        <Button onClick={onClickButton}>{buttontext}</Button>
      </Container>
    </MainBackgroundContainer>
  )
}

export default ReadMore
