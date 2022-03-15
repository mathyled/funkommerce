import React from 'react'
import './Option.css'

const Options = (props) => {
    const options = [
        {text: 'Buy', handler: props.actionProvider.handleBuy, id: 1},
        {text: 'Payment', handler: props.actionProvider.handlePayment, id: 2},
        {text: 'Help', handler: props.actionProvider.handleHelp, id: 3}
]
const buttonMark = options.map((option)=> (
    <button key={option.id} onClick={option.handler} className='option-button'>
        {option.text}
    </button>
))

return (
    <div className="option-container">{buttonMark}</div>
    )
}

export default Options