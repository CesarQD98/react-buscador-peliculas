import "./App.css";

import responseMovies from "./mocks/with-results.json";
import withoutResults from "./mocks/no-results.json";

function App() {
  const movies = responseMovies.results;
  const hasMovies = movies?.length > 0;

  console.log(hasMovies);

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form">
          <input placeholder="Avengers, Star Wars, The Matrix..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id.value}>
                <h3>{movie.name.first + " " + movie.name.last}</h3>
                <p>{movie.dob.date.slice(0, 4)}</p>
                <img
                  src={movie.picture.large}
                  alt={movie.name.first + " " + movie.name.last}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron películas para esta búsqueda</p>
        )}
      </main>
    </div>
  );
}

export default App;
