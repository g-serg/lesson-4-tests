import React, {Component} from 'react';
import Modal from './Modal';

class ModalButton extends Component {
  state = {isModalShow: false};

  static displayName = 'Modal button';

  hideModal = () => {
    this.setState({isModalShow: false});
  };

  showModal = () => {
    this.setState({isModalShow: true});
  };

  render() {
    const {isModalShow} = this.state;

    return (
      <div>
        <button onClick={this.showModal}>
          ShowModal!
        </button>
        {isModalShow && (
          <Modal>
            <div className="modal">
              <div className="modal__fog">
                <div className="modal__body">
                  <h1> Modal window!</h1>
                  <button
                    onClick={this.hideModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>,
          </Modal>
        )}
      </div>
    );
  }
}

export default ModalButton;
