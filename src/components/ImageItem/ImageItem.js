import { useState } from 'react';
import { ImgPic } from './ImageItemStyled';
import { Modal } from '../Modal/Modal';

export const ImageItem = props => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const { id, webformatURL, tags, largeImageURL } = props.image;

  return (
    <>
      <div key={id} onClick={toggleModal}>
        <ImgPic src={webformatURL} alt={tags} />
        <p>{tags}</p>
      </div>
      {showModal && (
        <Modal
          onClose={toggleModal}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      )}
    </>
  );
};
