import React from 'react'
import styled from 'styled-components'

const APODImage = styled.img`
    height: 200px;
    border: 4px solid #7F7FFF;
`

const ImageContainer = (props) => {
    return (
        <>
            <h2>{`Behold! ${props.title}`}</h2>
            <APODImage src={props.image} />
        </>
    )
}

export default ImageContainer;