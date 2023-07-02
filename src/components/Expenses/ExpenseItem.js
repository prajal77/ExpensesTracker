import { useState } from 'react';
import Card from '../Ui/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
const ExpenseItem = (props) => {
    // value,function inital value
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated!")
    }
    return (
        <>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button onClick={clickHandler}>click button</button>
            </Card>
        </>
    )
};

export default ExpenseItem; 