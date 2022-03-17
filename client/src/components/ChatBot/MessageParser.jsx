class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {

    const lowercase = message.toLowerCase();
    if (!lowercase) {this.actionProvider.empty()}

    if(lowercase.includes('funko')){this.actionProvider.funko()}
    
    if (lowercase.includes('registrarse') || lowercase.includes('register')){this.actionProvider.register()}
    
    if(lowercase.includes('comprar') || lowercase.includes('buy')){this.actionProvider.handleBuy()}
    
    if(lowercase.includes('pago') || lowercase.includes('payment')){this.actionProvider.handlePayment()}
    
    if (lowercase.includes('login')){this.actionProvider.login()}

    if (lowercase.includes('help')){this.actionProvider.handleHelp()}

    }
}


export default MessageParser;