
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { MovieList, MovieLink } from 'Pages/Home/Home.styled';
import { getSearchMovies } from 'Api/API';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchFormBar } from 'components/SearchForm/SearchFormBar';
import NotFound from 'Pages/NotFound/NotFound';


const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setMoviesList([]);
    setIsLoading(true);

    getSearchMovies(movieName).then(data => {
      if (!data.results.length) {
        setIsLoading(false);
        setError(true);
        return console.log('Not found');
      }
      setError(false);
      setMoviesList(data.results);
      setIsLoading(false);
    });
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
  };
  return (
    <main>
      <SearchFormBar onSubmit={handleSubmit} />
      {error && <NotFound>Not found</NotFound>}
      <MovieList>
        {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title || movie.name}
              </MovieLink>
            </li>
          );
        })}
        {isLoading && <Loader />}
      </MovieList>
    </main>
  );
};

export default Movies;
