import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BiCaretLeftCircle } from 'react-icons/bi';
import { getMovieDetails } from 'Api/API';
import {
  MovieBox,
  MovieAbout,
  Title,
  Button,
  GenresList,
  AddInfo,
  LinkGoBack,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieDetail(data));
  }, [movieId]);

  const { original_title, overview, genres, poster_path, vote_average } =
    movieDetail;
  const score = vote_average * 10;
  const scoreToFixed = score.toFixed(2);
  return (
    <main>
      <Button type="button">
        <LinkGoBack to={location.state?.from ?? '/'}>
          <BiCaretLeftCircle size={18} />
          Go back
        </LinkGoBack>
      </Button>
      <MovieBox>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `http://blog.aspneter.com/Images/no-thumb.jpg`
          }
          width={280}
          height={360}
          loading="lazy"
          alt="poster"
        />
        <MovieAbout>
          <Title>{original_title}</Title>
          <h3>User score: {scoreToFixed}%</h3>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genres</h3>
          <GenresList>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </GenresList>
        </MovieAbout>
      </MovieBox>
      <AddInfo>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            {' '}
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </ul>
      </AddInfo>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
