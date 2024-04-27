import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Page1 from './pages/Page1';

axios.defaults.baseURL = 'http://127.0.0.1:4000/';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Page1/>
    </div>
  );
}

export default App;
