import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieBox = styled.div`
  display: flex;
  gap: 10px;
  & > div {
    max-width: 400px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

export const Button = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  font-weight: 500;
  &:hover {
    background-color: lightblue;
  }
`;

export const LinkGoBack = styled(Link)`
  display: flex;
  font-size: 14px;
  align-items: center;
  column-gap: 10px;
`;

export const AddInfo = styled.div`
  padding: 20px;
  border-bottom: solid 1px grey;
`;

export const MovieAbout = styled.div`
  padding: 20px 40px;
`;

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
`;
