import { useState, useEffect } from 'react';
import { GlobalStyled } from './GlobalStyled';
import toast, { Toaster } from 'react-hot-toast';

import { Searchbar } from './Searchbar/Searchbar';
import { Layout } from './Layout/Layout';
import { normalizedImages, SearchAPI } from './API';
import { SpinerLoader } from './SpinerLoader/SpinerLoader';
import { ImageList } from './ImageList/ImageList';
import { Button } from './Button/Button';

export function App() {
  const [searchText, setSearchText] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (searchText === '') {
      return;
    } else {
      const response = async () => {
        try {
          setIsLoading(true);
          const res = await SearchAPI(searchText, page);
          toast.success(`We foung ${res.length} images`);

          if (res.length === 12) {
            setIsShow(true);
          } else {
            setIsShow(false);
          }

          if (res.length === 0) {
            toast("Sorry image isn't found...", {
              duration: 1500,
            });
          }

          const normalizeImages = normalizedImages(res);

          setImages(prevImages => [...prevImages, ...normalizeImages]);
          setIsLoading(false);
        } catch (error) {
          toast.error('Щось пішло не так 🤷‍♀️', { duration: 1500 });
        } finally {
          this.setState({ isLoading: false });
        }
      };
      response();
    }
  }, [page, searchText]);

  const searchValues = text => {
    setSearchText(text.search);
    setImages([]);
    setPage(1);
  };

  const loadPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Layout>
      <Searchbar onAnswerText={searchValues} />
      {isLoading && <SpinerLoader />}
      <ImageList images={images} />
      {isShow && <Button onClick={loadPage} />}
      <GlobalStyled />
      <Toaster />
    </Layout>
  );
}
