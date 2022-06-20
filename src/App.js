import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/Hero' element={<Hero/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/' element={<Hero/>} />
        <Route path='/' element={<Hero/>} />
        <Route path='/' element={<Hero/>} />
        <Route path='/' element={<Hero/>} />
      </Routes>
    </div>
  );
}

export default App;
