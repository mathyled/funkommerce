class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage
      this.setState = setStateFunc
    }

empty = ()=> {
    const message = this.createChatBotMessage('Por favor escribe tu consulta')
    this.addMessageToState(message)
}

saludo = () => {
  const message = this.createChatBotMessage('Hola, ¿Qué necesitas?')
  this.addMessageToState(message)
}


funko = () => {
    const message = this.createChatBotMessage("Somos una compañia que vende funkos.")
    this.addMessageToState(message)
} 

addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
  }
}


export default ActionProvider