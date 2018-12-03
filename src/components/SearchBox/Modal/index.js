import React, {Component} from "react";
import ReactModal from 'react-modal';
import Counter from '../Counter'


class ExampleApp extends Component {
  state = {
    showModal: false
  };

  handleOpenModal = () => this.setState({ showModal: true });

  handleCloseModal = () => this.setState({ showModal: false });

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <Counter />
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}



export default ExampleApp
