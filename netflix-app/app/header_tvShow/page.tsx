'use client';
import React from 'react';
import { fetchTvShows } from '@/assets/api/requests';
import styled, { ThemeProvider } from 'styled-components';
import TvShowCard from '@/assets/components/Common/TvShowCard';
import theme, { headerTitle } from '../style/theme';

async function getMovieData() {
  const tvShowsData = await fetchTvShows();
  //console.log('tvShowsData', tvShowsData);

  return {
    tvShowsData,
  };
}

export default async function HeaderMoviePage() {
  console.log('header-tvshow page');
  const tvShowsMovie = await getMovieData();
  //console.log('header-tvshow page');
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Title>{'Tv Shows'}</Title>
        <TvShowCard arr={tvShowsMovie.tvShowsData[0].results} />
      </ThemeProvider>
    </Container>
  );
}
const Container = styled.div``;
const Title = styled.div`
  ${headerTitle};
`;
