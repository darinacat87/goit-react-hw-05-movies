import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'Api/API';
import { List, ListItem } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <List>
      {reviews.length > 0
        ? reviews.map(({ author, content, id }) => (
            <ListItem key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </ListItem>
          ))
        : "Sorry, we don't have any information."}
    </List>
  );
};
export default Reviews;
