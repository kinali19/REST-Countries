import React, { useState } from 'react'
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Header from './components/Header';
import Countries from './components/Countries';
import CountryDetail from './components/Detail'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";



function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    //       <>
    //         <GlobalStyles />
    //         <Header toogleTheme={toggleTheme} theme={theme} />
    //         <Route path="/" element={<Countries />} />
    //         {/* <Route path="/detail/:countryname" element={<Detail />} /> */}

    //       </>
    //     </ThemeProvider>
    //  </Routes>
    // </BrowserRouter>


    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header toogleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/detail/:name" element={<CountryDetail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
