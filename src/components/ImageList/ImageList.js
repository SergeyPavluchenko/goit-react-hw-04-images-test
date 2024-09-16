import { ImageItem } from '../ImageItem/ImageItem';
import { ImageGallary, ImageGalleryItem } from './ImageListStyled';

export const ImageList = ({ images }) => {
  return (
    <>
      <ImageGallary>
        {images.map(image => {
          return (
            <ImageGalleryItem key={image.id}>
              <ImageItem image={image} />
            </ImageGalleryItem>
          );
        })}
      </ImageGallary>
    </>
  );
};
