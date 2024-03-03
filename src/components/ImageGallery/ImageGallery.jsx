// import { axios } from 'axios';
import { useState, useEffect } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import getImages from '../../apiService/photos';
import css from './ImageGallery.module.css';

// console.log(getImages('cat', 3).hits);

export default function ImageGallery() {
  const [query, setQuery] = useState('cat');
  const [images, setImages] = useState([]);

  const handleSearch = query => setQuery(query);

  useEffect(() => {
    if (!query) return;

    async function findImages() {
      const images = await getImages(query, 1);
      setImages(images);
    }

    findImages();
  }, [query]);

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

// useEffect(() => {
//   async function getImages() {
//     const response = await Axios.get('');
//     setImages(response.data.hits);
//   }

//   getImages();
// }, []);
