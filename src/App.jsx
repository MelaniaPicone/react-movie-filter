import { useState } from "react";
import { useEffect } from "react";

const startMovies =  [
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ];


function App() {
const [genre, setGenre] = useState ("");
const [movies, setMovies] = useState (startMovies);

useEffect(()=> {
if (genre !== ""){
  const selectedMovies = startMovies.filter(movie => movie.genre === genre);
  setMovies(selectedMovies);
}

else {
  setMovies(startMovies);
}

}, [genre]);

  return (<>
 <div className="container my-5">
  <div className="row gy-4">
    <div className="col-12">
      <h1>React Movies</h1>
    </div> 

    <div className="col-12">
      <select name="" id="" className="form select my-3" value= {genre} onChange={(e) => setGenre(e.target.value)}>


 <option value="">Seleziona genere</option>
 <option value="Fantascienza">Fantascienza</option>
 <option value="Azione">Azione</option>
 <option value="Romantico">Romantico</option>
 <option value="Thriller">Thriller</option>
</select>
      <ul className="list-group ms-0">
        {movies.map((movie, index)=> {
          return (<li key={index} className="list-group-item">
            {movie.title}
          </li>);
        })}
      </ul>
    </div> 
  </div>
 </div>


  
  </> )
}

export default App
