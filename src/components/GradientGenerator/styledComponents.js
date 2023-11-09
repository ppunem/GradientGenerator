// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: url((props)=> to ${props.direction},props.color1,props.color2);
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainHead = styled.h1`
  color: #ffffff79;
  font-family: 'roboto';
  font-size: 25px;
`

export const SubHead = styled.p`
  color: #ededed;
  font-family: 'roboto';
  font-size: 18px;
`
export const DirectionButtonsContainer = styled.ul`
  display: flex;
  width: 55%; 
`

export const BottomContainer = styled.div`
  width: 35%;
  display: flex;
  justitfy-content: space-between;
`

export const StartColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const EndColorContainer = styled(StartColorContainer)

export const StartLabel = styled.label`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 10px;
`

export const EndLabel = styled(StartLabel)

export const StartInput = styled.input`
  width: 60px;
`

export const EndInput = styled(StartInput)
