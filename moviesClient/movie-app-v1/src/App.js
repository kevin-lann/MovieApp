import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home'

function App() {

  const [movies, setMovies] = useState(); // useState is a hook that gets the movies list when change is detected, setMovies is a function given to us so that we can use to set to database

  const getMovies = async () => { // asynch-await ensures ui Is not blocked when performing long running IO operations.
    try {

      const response = await api.get("/api/v1/movies");
      console.log(response.data);

      setMovies(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { // this hook makes sure the getMovies fn called when app first loads
    getMovies();
  }, []);

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route paths="/" element={<Home/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
