import React from 'react'
import { Expensedate } from '../expensedate/Expensedate'
import "./Expenseitem.css"
export const Expenseitem = (props) => {
return (
    <div className='expense-item'>
    <Expensedate date={props.date}/>
    <div className='expense-item__description'>
        <h2>{props.title}</h2>
       
        <div className='expense-item__price'>${props.amount}</div>
    </div>
    </div>
)
}
