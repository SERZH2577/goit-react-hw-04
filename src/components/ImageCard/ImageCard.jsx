import { AiFillLike } from 'react-icons/ai';
import css from './ImageCard.module.css';

export default function ImageCard() {
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <img
          src='https://64.media.tumblr.com/e009d3039d80b4aeaaed0ca37866eb03/b87143d733ad3bf2-5d/s2048x3072/1c2e2abb1d966be4cee43878309d2c2b1871c393.jpg'
          alt=''
          className={css.img}
        />
      </div>
      <div className={css.info}>
        <p className={css.author}>Author: Bobby Bob</p>
        <p className={css.likes}>
          {<AiFillLike size='18' className={css.iconLikes} />} 3750
        </p>
      </div>
    </div>
  );
}
