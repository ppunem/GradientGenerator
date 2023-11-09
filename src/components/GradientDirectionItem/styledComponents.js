// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type:none;
`

export const CustomButton = styled.button`
  backgroundColor:${props => (props.clicked ? '#ffffff79' : '#ededed')}
  color:#334155;
  padding-top:8px;
  padding-bottom:8px;
  padding-left:18px;
  padding-right:18px;
  border:none;
  border-radius:12px;
`
