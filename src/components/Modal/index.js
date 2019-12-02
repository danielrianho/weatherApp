import React, { Component } from 'react';

class Modal extends Component {
  render() {


    return (
      <main>
        <h1>React Modal</h1>
        <Modal>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button">
          open
        </button>
      </main>
    );


  }

}

export default Modal;