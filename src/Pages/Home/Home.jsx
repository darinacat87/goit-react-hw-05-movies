import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Title, MovieLink, MovieList } from './Home.styled';
import { getTrending } from 'Api/API';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <Title>Trending Today</Title>
      <MovieList>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </MovieLink>
          </li>
        ))}
        {isLoading && <Loader />}
      </MovieList>
    </main>
  );
};
export default Home;
