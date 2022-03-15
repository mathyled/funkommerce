import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'
import Help from './Widgets/Help/Help'
import  Options  from './Widgets/Options/Options'

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
  initialMessages: [createChatBotMessage("Hi! I'm Funko. ¿What can I do for you?", {
    widget: "options",
  })
],
widgets: [
  {
    widgetName: "options",
    widgetFunc: (props) => <Options {...props} />,
    },
  
  {
    widgetName: "help",
    widgetFunc: (props) => <Help {...props} />,
    },
  ],


}

export default config