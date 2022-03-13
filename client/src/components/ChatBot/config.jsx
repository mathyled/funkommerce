import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'
import  Options  from './Options'

const config = {
  botName: 'Funkommerce',
  customComponents: {
    header: () => (
      <div
        style = {{ color: 'white', backgroundColor: '#2d3748', padding: '5px', borderRadius: '3px' }}>
        Chat de ayuda
      </div>
    ),
  },
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#2d3748",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#2d3748",
    },
  },
  initialMessages: [createChatBotMessage('Hola! Soy Funko. ¿En que te ayudo?', {
    widget: 'options'
  })],
  widget: [{
    widgetName: 'options',
    widgetFunc: (props) => <Options {...props} 
    /> 
  }]

}

export default config