'use client';
import React from 'react';
import { fetchUpComing } from '@/assets/api/requests';
import styled from 'styled-components';
import Link from 'next/link';
import MovieCard from '@/assets/components/Common/MovieCard';

async function getMovieData() {
  const upComingData = await fetchUpComing();

  return {
    upComingData,
  };
}

export default async function ComingPage() {
  const comingMovie = await getMovieData();
  return (
    <>
      <Title>{'Coming Soon'}</Title>
      <MovieCard movies={comingMovie.upComingData[0]} />
    </>
  );
}

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
