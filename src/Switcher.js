import React, {Component} from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  renderTitle = (el, index) => {
    const {type: {displayName, name}} = el;

    return (
      <li
        className="component-list__name"
        data-id={index}
        onClick={this.handleChangeChild}
      >
        {displayName || name}
      </li>
    );
  };

  handleChangeChild = event => {
    const dataId = +event.target.getAttribute(
      'data-id'
    );
    this.setState({selectedChild: dataId});
  };

  render() {
    const {children} = this.props;
    const {selectedChild} = this.state;

    return (
      <div>
        <nav>
          <ul className="component-list">
            {React.Children.map(
              children,
              this.renderTitle
            )}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">
          {React.Children
            .toArray(children)
            .filter(
              (item, index) =>
                index === selectedChild
            )}
        </div>
      </div>
    );
  }
}

export default Switcher;
