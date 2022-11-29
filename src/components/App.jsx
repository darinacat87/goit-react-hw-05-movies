import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './MainLayout/MainLayout';

const Home = lazy(() => import('Pages/Home/Home'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('Pages/Movies/Movies'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
