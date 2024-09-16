import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ImgStyle, ModalWindow, Overlay } from './ModalStyled';

const ModaRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  // componentDidMount = () => {
  //   window.addEventListener('keydown', this.hendleClick);
  // };

  // componentWillUnmount = () => {
  //   window.removeEventListener('keydown', this.hendleClick);
  // };

  closeMOdal = () => {
    this.props.onClose();
  };

  hendleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.hendleClick}>
        <ModalWindow>
          <ImgStyle src={this.props.largeImageURL} alt={this.props.tags} />
          <AiOutlineCloseCircle
            color="white"
            cursor="pointer"
            onClick={this.closeMOdal}
          />
        </ModalWindow>
      </Overlay>,
      ModaRoot
    );
  }
}
