class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {

    const lowercase = message.toLowerCase();
    if (!lowercase) {this.actionProvider.empty()}

    if(lowercase.includes('funko')){this.actionProvider.funko()}

    if(lowercase.includes('comprar')){this.actionProvider.handleBuy()}

    if(lowercase.includes('pago')){this.actionProvider.handlePayment()}

    }
}


export default MessageParser;