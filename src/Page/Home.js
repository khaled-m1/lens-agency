import React from 'react';
import Footer from '../Components/Home/Footer';
import Header from '../Components/Home/Header';
import Message from '../Components/Home/Message';
import Service from '../Components/Home/Service';
// import Servise2 from '../Components/Home/Service2';
const Home = () => {
  return (
    <>
      <Header />
      <Message />
      <Service />
      {/* <Servise2 /> */}
      <Footer />
    </>
  );
};

export default Home;
