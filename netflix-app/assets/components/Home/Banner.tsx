import React from 'react';
import styled from 'styled-components';
import { MovieTypeArray } from '@/assets/interface/interface';

export const Banner = ({ obj }: MovieTypeArray) => {
  console.log('Banner');
  return (
    <Header>
      <BackImg
        imageurl={`https://image.tmdb.org/t/p/original${obj.poster_path}`}
      />
    </Header>
  );
};

const Header = styled.div`
  width: 375px;
  height: 415px;
`;

const BackImg = styled.div<{ imageurl: string }>`
  width: 375px;
  height: 415px;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0) 87.26%,
      #000000 100%
    ),
    url(${(props) => props.imageurl});
  background-size: cover;
  background-position: auto;
`;
