import React from 'react'
import './Help.css'

const Help = (props) => {
    const helpers = [
        {text: 'FAQ', handler: props.actionProvider.handleFAQ, id: 1},
        {text: 'About Us', handler: props.actionProvider.handleAboutUs, id: 2},
        {text: 'Henry', handler: props.actionProvider.handleHenry, id: 3},
        {text: 'Other', handler: props.actionProvider.handleOther, id: 4},
]
const buttonMark = helpers.map((option)=> (
    <button key={option.id} onClick={option.handler} className='help-button'>
        {option.text}
    </button>
))

return (
    <div className="help-container">{buttonMark}</div>
    )
}

export default Help