import React from 'react'
import styled from 'styled-components'




const Text = styled.h1`
position: fixed;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color: rgba(0,44,22,0.5);
font-size: calc(5rem + 5vw);
z-index: 1;
`

const BigTitle = (props) => {
    return (
        <Text top = {props.top} left ={props.left} right ={props.right} translate={props.translate}> 
            {props.text}
        </Text>
    )
}

export default BigTitle
