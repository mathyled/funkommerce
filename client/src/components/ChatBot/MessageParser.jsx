class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {

    const lowercase = message.toLowerCase();
    if (!lowercase) {this.actionProvider.empty()}

      if(lowercase.includes('funko')){this.actionProvider.funko()}

      if(lowercase.includes('hi')){this.actionProvider.saludo()}

      if(lowercase.includes('hello')){this.actionProvider.saludo()}

      if(lowercase.includes('hola')){this.actionProvider.saludo()}

      if(lowercase.includes('buenas')){this.actionProvider.saludo()}

      if(lowercase.includes('buenos')){this.actionProvider.saludo()}
    }
}


export default MessageParser;