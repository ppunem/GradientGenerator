import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  MainHead,
  SubHead,
  DirectionButtonsContainer,
  BottomContainer,
  StartColorContainer,
  EndColorContainer,
  StartLabel,
  EndLabel,
  StartInput,
  EndInput,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    direction: gradientDirectionsList[0].value,
    activeOptionId: gradientDirectionsList[0].directionId,
  }

  changeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  changeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  changeBackgroundDirection = value => {
    this.setState({direction: value})
  }

  render() {
    const {firstColor, secondColor, direction, activeOptionId} = this.state

    return (
      <MainContainer
        color1={firstColor}
        color2={secondColor}
        direction={direction}
      >
        <MainHead>Generate a Css Color Gradient</MainHead>
        <SubHead>Choose Direction</SubHead>
        <DirectionButtonsContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionDetails={each}
              clicked={each.directionId === activeOptionId}
              changeBackgroundDirection={this.changeBackgroundDirection}
            />
          ))}
        </DirectionButtonsContainer>
        <SubHead>Pick the Colors</SubHead>
        <BottomContainer>
          <StartColorContainer>
            <StartLabel htmlFor="first">{firstColor}</StartLabel>
            <StartInput
              type="color"
              value={firstColor}
              id="first"
              onChange={this.changeFirstColor}
            />
          </StartColorContainer>
          <EndColorContainer>
            <EndLabel htmlFor="second">{secondColor}</EndLabel>
            <EndInput
              type="color"
              value={secondColor}
              id="second"
              onChange={this.changeSecondColor}
            />
          </EndColorContainer>
        </BottomContainer>
      </MainContainer>
    )
  }
}

export default GradientGenerator
