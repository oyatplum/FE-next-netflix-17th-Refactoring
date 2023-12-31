'use client';
import React from 'react';
import { fetchUpComing } from '@/assets/api/requests';
import styled, { ThemeProvider } from 'styled-components';
import MovieCard from '@/assets/components/Common/MovieCard';
import theme, { headerTitle } from '../style/theme';

async function getMovieData() {
  const upComingData = await fetchUpComing();

  return {
    upComingData,
  };
}

export default async function ComingPage() {
  console.log('coming page');
  const comingMovie = await getMovieData();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Title>{'Coming Soon'}</Title>
        <MovieCard movies={comingMovie.upComingData[0]} />
      </ThemeProvider>
    </>
  );
}

const Title = styled.div`
  ${headerTitle};
`;
