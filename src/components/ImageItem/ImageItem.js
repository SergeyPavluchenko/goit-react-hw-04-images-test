import React, { Component } from 'react';
import { ImgPic } from './ImageItemStyled';
import { Modal } from '../Modal/Modal';

export class ImageItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { webformatURL, tags, largeImageURL } = this.props.image;
    return (
      <>
        <div>
          <ImgPic onClick={this.toggleModal} src={webformatURL} alt={tags} />
          <p>{tags}</p>
        </div>
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        )}
      </>
    );
  }
}
