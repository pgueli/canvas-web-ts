// import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Admin from './routes/Admin';
import Library from './routes/Library';
import LibraryItem from './routes/LibraryItem';
import AllUploads from './routes/AllUploads';
import Displays from './routes/Displays';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="library" element={<Library />} />
          <Route path="library/:id" element={<LibraryItem />} />
          <Route path="allUploads" element={<AllUploads />} />
          <Route path="displays" element={<Displays />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
