import { AiFillLike } from "react-icons/ai";
import css from "./ImageCard.module.css";

export default function ImageCard({ smallImg, altImg, author, imgLikes }) {
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <img src={smallImg} alt={altImg} className={css.img} />
      </div>
      <div className={css.info}>
        <p className={css.author}>
          <span className={css.authorParagraph}>Author:</span> {author}
        </p>
        <p className={css.likes}>
          {<AiFillLike size="18" className={css.iconLikes} />} {imgLikes}
        </p>
      </div>
    </div>
  );
}
