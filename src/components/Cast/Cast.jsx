import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'Api/API';
import { CastList, CastItem, TextName, TextCharacter } from './Cast.styled';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId).then(data => setCastList(data.cast));
  }, [movieId]);
  return (
    <CastList>
      {castList.length > 0
        ? castList.map(({ id, name, profile_path, character }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `http://blog.aspneter.com/Images/no-thumb.jpg`
                }
                alt="actor"
                loading="lazy"
                width={100}
                height={160}
              />
              <TextName>{name}</TextName>
              <TextCharacter> Character: {character}</TextCharacter>
            </CastItem>
          ))
        : "Sorry, we don't have any information."}
    </CastList>
  );
};

export default Cast;
