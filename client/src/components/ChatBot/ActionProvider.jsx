class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage
      this.setState = setStateFunc
    }

empty = ()=> {
    const message = this.createChatBotMessage('Write something ¡you moron!')
    this.addMessageToState(message)
}

funko = () => {
    const message = this.createChatBotMessage("We sell funkos. End of Story!")
    this.addMessageToState(message)
} 

handleBuy = ()=> {
  const message = this.createChatBotMessage(<div><p>If you want to buy</p><a href='#'>Click Here 🛒</a></div>)
  this.addMessageToState(message)
  }

handlePayment = () => {
  const message = this.createChatBotMessage(<div><p>To know about payment methods</p><a href='#'>Click Here 💳💵</a></div>)
  this.addMessageToState(message)
}

handleHelp = () => {
  const message = this.createChatBotMessage('What kind of help do you need?', {widget: 'help'})
  this.addMessageToState(message)
}

handleFAQ = () => {
  const message = this.createChatBotMessage(<div><p>FAQ</p><a href='#'>Click Here 🛠</a></div>)
  this.addMessageToState(message)
}

handleAboutUs = () => {
  const message = this.createChatBotMessage(<div><p>If you want to know more about us</p><a href='#'>Click Here 🧙</a></div>)
  this.addMessageToState(message)
}

handleHenry = () => {
  const message = this.createChatBotMessage(<div><p>To know about the academy</p><a href='https://www.soyhenry.com/'>Visit Henry 🏰</a></div>)
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