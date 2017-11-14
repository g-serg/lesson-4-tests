import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  static displayName = 'Card Number formating';

  handleChange = cardNumber => {
    this.setState({cardNumber});
  };

  render() {
    const {cardNumber} = this.state;

    return (
      <CardNumberInput
        cardNumber={cardNumber}
        onChange={this.handleChange}
      />
    );
  }
}

export default CardNumberHolder;
