import React, { Component } from 'react';
import { GlobalStyled } from './GlobalStyled';
import toast, { Toaster } from 'react-hot-toast';

import { Searchbar } from './Searchbar/Searchbar';
import { Layout } from './Layout/Layout';
import { normalizedImages, SearchAPI } from './API';
import { SpinerLoader } from './SpinerLoader/SpinerLoader';
import { ImageList } from './ImageList/ImageList';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchText: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    isShow: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { searchText } = this.state;
    if (
      prevState.searchText !== searchText ||
      prevState.page !== this.state.page
    ) {
      this.response();
    }
  };

  response = async () => {
    const { searchText, page } = this.state;
    try {
      this.setState({ isLoading: true, error: null });
      const res = await SearchAPI(searchText, page);
      console.log(res);

      if (res.length === 12) {
        this.setState({ isShow: true });
      } else {
        this.setState({ isShow: false });
      }

      if (res.length === 0) {
        toast("Sorry image isn't found...", {
          duration: 1500,
        });
      }

      const normalizeImages = normalizedImages(res);

      this.setState(state => ({
        images: [...state.images, ...normalizeImages],
      }));
    } catch (error) {
      toast.error('Щось пішло не так 🤷‍♀️', { duration: 1500 });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  searchValues = text => {
    this.setState({ searchText: text.search });
  };

  loadPage = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    const { isLoading, isShow } = this.state;
    return (
      <Layout>
        <Searchbar onAnswerText={this.searchValues} />
        {isLoading && <SpinerLoader />}
        <ImageList images={this.state.images} />
        {isShow && <Button onClick={this.loadPage} />}
        <GlobalStyled />
        <Toaster />
      </Layout>
    );
  }
}
