import { createChatBotMessage } from 'react-chatbot-kit'

const config = {
  botName: 'Funkommerce',
  
  customComponents: {
    header: () => (
      <div
        style={{ color: 'white', backgroundColor: '#2d3748', padding: '5px', borderRadius: '3px' }}
      >
        Chat de ayuda
      </div>
    ),
  },
  
  customStyles: {
    botMessageBox: {
      backgroundColor: "#2d3748",
    },
    chatButton: {
      backgroundColor: "#2d3748",
    },
  },

  initialMessages: [
    createChatBotMessage(
            'Hola! Soy Funko. ¿En que te ayudo?'
        )
    ]
}

export default config