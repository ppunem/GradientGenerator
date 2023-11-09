// Write your code here
import {ListItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeBackgroundDirection, clicked} = props
  const {value, displayText} = directionDetails

  const changeDirection = () => {
    changeBackgroundDirection(value)
  }

  return (
    <ListItem>
      <CustomButton type="button" onClick={changeDirection} clicked={clicked}>
        {displayText}
      </CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
