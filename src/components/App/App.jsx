// import { Axios } from 'axios';
import { useState, useEffect } from "react";
import getImages from "../../apiService/photos";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "react-modal";
import css from "./App.module.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState("block");
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [modalContent, setModalContent] = useState({});

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
  };

  const handelPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!query.trim()) return;

    async function findImages() {
      try {
        setIsHidden("none");
        setIsLoading(true);

        const images = await getImages(query, page);
        if (page === 1) {
          setImages(images);
        } else {
          setImages((prevImages) => [...prevImages, ...images]);
        }
      } catch ({ message }) {
        setImages([]);
        setIsError(true);
        setError(message + "! Try again.");
      } finally {
        setIsLoading(false);
        setIsHidden("block");
      }
    }

    findImages();
  }, [query, page]);

  // const onModalOpen = (full, alt_description) => {
  //   setModalContent({ full, alt_description });
  //   setShowModal(true);
  // };

  // const onCloseModal = () => {
  //   setShowModal(false);
  // };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length !== 0 && (
        <ImageGallery images={images} /*onModalOpen={onModalOpen}*/ />
      )}
      {images.length !== 0 && (
        <LoadMoreBtn onClick={handelPage} isHidden={isHidden}>
          Load more
        </LoadMoreBtn>
      )}
      {isLoading && <Loader />}
      {/* {showModal && (
        <ImageModal onCloseModal={onCloseModal} content={modalContent} />
      )} */}
      {isError && <ErrorMessage error={error} isHidden={isHidden} />}
    </>
  );
}
