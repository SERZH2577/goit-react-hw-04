import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {images.map(
          ({ id, alt_description, likes, urls: { small }, user: { name } }) => {
            return (
              <li key={id} className={css.item}>
                <div>
                  {
                    <ImageCard
                      smallImg={small}
                      altImg={alt_description}
                      author={name}
                      imgLikes={likes}
                    />
                  }
                </div>
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
}
