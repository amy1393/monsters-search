import React from 'react';
import './card.styles.css'

export const Card = props =>(
    <div className = 'card-conatiner'>
    <img alt = 'users' src={`https://robohash.org/${props.users.id}?set=set2&size=180x180`} />
    <h2>{props.users.title}</h2>
    <p>{props.users.title}</p>
    </div>
)