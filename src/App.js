import React ,{useEffect, useState} from 'react';
import { StyledEngineProvider } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { fetchNewAlbums,fetchSongs,fetchTopAlbums } from './api/api';
import Footer from "./components/Footer/Footer"

// import Hero from './components/Hero/Hero';
// import Card from './components/Card/Card';


function App() {
 const[data,setData]=useState({});
 const generateData=(key,source)=>{
  source().then((data)=>{
    setData((prevState)=>{
      return {...prevState,[key]:data}
    })
  })
 }
 useEffect(()=>{
  generateData('topAlbums',fetchTopAlbums);
  generateData('newAlbums',fetchNewAlbums);
  generateData('songs',fetchSongs)
 },[]);
 const {topAlbums=[],newAlbums=[],songs=[]}=data;






  return (
  
      <>
      <StyledEngineProvider injectFirst>
     <Navbar/>
     <Outlet  context={{data:{topAlbums,newAlbums,songs}}}/>
     <Footer/>
     </StyledEngineProvider>
    </>
    


  );
}

export default App;
