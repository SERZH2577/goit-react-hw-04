import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageCard from '../ImageCard/ImageCard';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ReactModal from 'react-modal';
import css from './App.module.css';

export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <SearchBar />
      <ImageCard />
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
