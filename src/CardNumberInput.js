import React, {Component} from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      number: this.format(nextProps.cardNumber)
    });
  }

  componentDidMount() {
    const {cardNumber} = this.props;
    this.setState({
      number: this.format(cardNumber)
    });
  }

  handleChange = event => {
    const {onChange} = this.props;
    const {value} = event.target;
    onChange(this.normalize(value));
  };

  render() {
    const {number} = this.state;

    return (
      <input
        value={this.format(number)}
        onChange={this.handleChange}
      />
    );
  }

  //functions
  format = input =>
    /[0-9]+/.test(String(input))
      ? String(input)
          .match(/[0-9]{1,4}/g)
          .join(' ')
      : '';

  normalize = formatedInput =>
    formatedInput.replace(/ /g, '');
}

export default CardNumberInput;
