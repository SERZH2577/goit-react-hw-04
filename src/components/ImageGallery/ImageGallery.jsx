import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onModalOpen }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {images.map(
          ({
            id,
            alt_description,
            likes,
            urls: { small, full },
            user: { name },
          }) => {
            return (
              <li
                key={id}
                className={css.item}
                onClick={() => {
                  // onModalOpen(full, alt_description);
                }}
              >
                {
                  <ImageCard
                    smallImg={small}
                    altImg={alt_description}
                    author={name}
                    imgLikes={likes}
                  />
                }
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
