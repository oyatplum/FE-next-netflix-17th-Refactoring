'use client';
import React from 'react';
import styled from 'styled-components';

export const Banner = ({ fetchUrl }: any) => {
  return (
    <Header>
      <BackImg
        src={`https://image.tmdb.org/t/p/original${fetchUrl[1].poster_path}`}
      />
    </Header>
  );
};

const Header = styled.div`
  width: 375px;
  height: 415px;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0) 87.26%,
    #000000 100%
  );
`;

const BackImg = styled.img`
  width: 375px;
  height: 415px;
`;
