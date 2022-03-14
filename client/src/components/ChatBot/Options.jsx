import React from 'react'

const Options = (props) => {
    const options = [
        {text: 'Buy', handler:()=>{}, id: 1},
        {text: 'Payment', handler: ()=> {}, id: 2},
        {text: 'Uplaod', handler: ()=> {}, id: 3}
]
const buttonMark = options.map((option)=> (
    <button key={option.id} onClick={option.handler} className='option-button'>
        {option.text}
    </button>
))

return <div className="option-container">{buttonMark}</div>
}

export default Options