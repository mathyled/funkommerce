import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'

const config = {
  botName: 'Funkommerce',
  initialMessages: [createChatBotMessage('Hola! Soy Funko. ¿En que te ayudo?', {
    widget: 'options'
  })],
  widget: [{
    widgetName: 'options',
    widgetFunc: (props) => <options {...props} /> 
  }]

}

export default config