'use client';
import React from 'react';
import { fetchNowPlaying } from '@/assets/api/requests';
import styled from 'styled-components';
import Link from 'next/link';
import MovieCard from '@/assets/components/Common/MovieCard';

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
      <Title>{'Movies'}</Title>
      <MovieCard movies={nowPlayingMovie.nowPlaingData[0]} />
    </Container>
  );
}

const Container = styled.div``;
const Title = styled.div`
  width: 300px;
  height: 45px;
  font-weight: 700;
  font-size: 26.7482px;
  line-height: 20px;
  letter-spacing: -0.0733945px;
  color: #ffffff;
  margin: 60px 0 20px 0;
`;
