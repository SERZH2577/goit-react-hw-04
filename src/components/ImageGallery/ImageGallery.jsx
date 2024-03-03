import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ arr }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {arr.map(() => {
          return (
            <li className={css.item}>
              <div>{<ImageCard />}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
