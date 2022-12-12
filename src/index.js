import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header'
import Banner from './components/Banner'
import ComputerVision from './components/ComputerVision'
import './index.css'
import { computerVision } from './components/ComputerVision/azure-cognitiveservices-computervision';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='teste'>
    <Header />
    <Banner
      videoTitle={"Animal ou Humano?"}
      url={"https://www.youtube.com/watch?v=UhA_ZgI-otM"}
      videoDescription={"Através dessa ferramenta faremos com que a IA reconheça se a foto é de um animal ou de um humano."}
    />

    <ComputerVision />

  </div>
);


