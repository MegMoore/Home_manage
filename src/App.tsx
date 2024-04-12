import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import { Home } from './Home';

export const baseURL = 'http://localhost:5035'

function App() { 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
