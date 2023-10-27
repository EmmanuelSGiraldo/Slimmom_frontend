import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home';

function App() {
  return (
    <BrowserRouter basename='/Slimmom_frontend'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
