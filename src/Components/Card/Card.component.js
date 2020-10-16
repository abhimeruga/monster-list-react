import React from 'react'
import './card-container.styles.css'

function Card(props) {
    return (
        <div className="card-container">
            <img className='image-size' src={`https://robohash.org/${props.monster.id}?set=set3&size=50x50`} />
            <h1> {props.monster.name} </h1>
        </div>
    )
}

export default Card
