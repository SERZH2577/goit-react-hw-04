// import { Axios } from 'axios';
import { useState, useEffect } from 'react';
import getImages from '../../apiService/photos';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ReactModal from 'react-modal';
import css from './App.module.css';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState('block');

  const handleSearch = query => {
    setQuery(query);
  };

  const handelPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) return;

    async function findImages() {
      try {
        setIsHidden('none');
        setIsLoading(true);
        const images = await getImages(query, page);
        setImages(prevImages => [...prevImages, ...images]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setIsHidden('block');
      }
    }

    findImages();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      {images.length !== 0 && (
        <LoadMoreBtn onClick={handelPage} isHidden={isHidden}>
          Load more
        </LoadMoreBtn>
      )}
      {isLoading && <Loader />}
      <ReactModal />
    </>
  );
}
