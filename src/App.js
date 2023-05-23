import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import MovieList from './MovieList';
import Favlist from './Favlist';
function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movieList" element={<MovieList/>}></Route>
        <Route path='/favList' element={<Favlist/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
