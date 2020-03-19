import React from 'react'

const ImageContainer = (props) => {
    return (
        <>
            <h2>{`Behold! ${props.title}`}</h2>
            <img src={props.image}></img>
        </>
    )
}

export default ImageContainer;