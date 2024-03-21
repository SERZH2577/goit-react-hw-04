import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
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
              <li key={id} className={css.item}>
                {
                  <ImageCard
                    onClick={() => {
                      onClick(full, alt_description);
                    }}
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
