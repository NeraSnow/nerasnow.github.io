import React from 'react'

const URL = (props) => {
    return (
        <a href={props.info.url}>{props.info.text}</a>
    )
}

export default URL
