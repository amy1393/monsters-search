import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component'


export const CardList = props => 
    (<div className = 'card-list'>
    {props.ninjas.map(users=> (<Card key={users.id} users ={users} />))}


    </div>);
