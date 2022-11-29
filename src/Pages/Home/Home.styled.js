import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 0;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: black
  &:hover,
  &:focus {
    color: lightgreen
    }
  &:not(:last-child) {
    margin-right: 10px;
  }
  margin-left: 20px;
`;

export const MovieList = styled.ul`
  padding: 20px 0 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
