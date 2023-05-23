import './App.css';
import Home from './Home';
import Favlist from './Favlist';
import Navbar from './Navbar'
import {Route,Routes,BrowserRouter} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favList' element={<Favlist/>}/>
      </Routes>
    </BrowserRouter>

  );
}
export default App;
