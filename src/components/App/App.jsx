import { Axios } from 'axios';
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ReactModal from 'react-modal';
import css from './App.module.css';

export default function App() {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   async function getImages() {
  //     const response = await Axios.get('');
  //     setImages(response.data.hits);
  //   }

  //   getImages();
  // }, []);

  return (
    <>
      <SearchBar />
      <ImageGallery arr={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      <LoadMoreBtn />
      <Loader />
      <ReactModal />
    </>
  );
}

// SUUEpg8eGmgRBtWQNK-mXIeBGJQlQS2J2m8NPoAUcJM

// urls
// small
// regular
