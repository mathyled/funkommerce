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

register = () => {
  const message = this.createChatBotMessage("To register go to the top left corner of the page and push the register button and complete the required fields")
  this.addMessageToState(message)
}

login = () => {
  const message = this.createChatBotMessage("To login go to the top left corner of the page and push the login button and complete the required fields")
  this.addMessageToState(message)
}

handleBuy = () => {
  const message = this.createChatBotMessage("1- Select the product you like 2- Push the add to car button 3- Click on the checkout button 4- Complete the required fields")
  this.addMessageToState(message)
}

handlePayment = () => {
  const message = this.createChatBotMessage("At this moment we only work with Credit Cards")
  this.addMessageToState(message)
}

handleHelp = () => {
  const message = this.createChatBotMessage('What kind of help do you need?', {widget: 'help'})
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

handleOther = () => {
  const message = this.createChatBotMessage(<div><p>You want to know how to do a chat?</p><a href='https://www.youtube.com/watch?v=AeojRYwfAMo&list=PL_kr51suci7UQAxHOF2GitkM5WrOBPcpf'>Check this dude</a></div>)
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