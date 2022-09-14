import imageGalleryItem from './ImageGalleryItem.module.css';

export function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
  toggleModal,
}) {
  return (
    <li key={id} className={imageGalleryItem.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        onClick={() => toggleModal(largeImageURL)}
      />
    </li>
  );
}
