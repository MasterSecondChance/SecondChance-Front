import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Category from '../components/Categories/Category';

const Home = () => {

  return (
    <>
      <Header />
      <Category />
      <Card />
    </>
  );
};

export default Home;