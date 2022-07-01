import React from 'react';
import { ChakraProvider, Box, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import '@openfonts/cairo_arabic';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Page/Home';
import Navbar from './Components/Navbar/Navbar';
import theme from './Theme/theme';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
