
import { useEffect } from 'react';
import './App.css';
import {getMovieList, searchMovie} from "./api"

const App = () => {


  useEffect (() => {
      getMovieList()
  }, [])
  const search = (q) => {
    console.log({q})
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>jeconia movie.</h1>
        <input placeholder='Cari film favorit..' className='Movie-search'
        onChange={(target) => search(target.value)}
        
        />
        <div className="Movie-container">
          
          <div className="Movie-wrapper">
            <div className="Movie-title">Contoh Film Pertama</div>
              <img className="Movie-images" src=''/>
                <div className="Movie-date">17-06-2023</div>
                  <div className="Movie-rate">9,0</div>
          </div>
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
