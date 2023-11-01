'use client';
import React from 'react';
import { fetchNowPlaying } from '@/assets/api/requests';
import styled, { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import MovieCard from '@/assets/components/Common/MovieCard';
import theme from '../style/theme';

async function getMovieData() {
  const nowPlaingData = await fetchNowPlaying();
  console.log('header_movies');

  return {
    nowPlaingData,
  };
}

export default async function HeaderMoviePage() {
  const nowPlayingMovie = await getMovieData();

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Title>{'Movies'}</Title>
        <MovieCard movies={nowPlayingMovie.nowPlaingData[0]} />
      </ThemeProvider>
    </Container>
  );
}

const Container = styled.div``;
const Title = styled.div`
  ${(props) => props.theme.headerTitle};
`;
