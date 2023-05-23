import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import MovieList from './MovieList';
function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movieList" element={<MovieList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
