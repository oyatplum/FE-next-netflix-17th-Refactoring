'use client';
import React, { use } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { fetchDetails } from '@/assets/api/requests';
import { ShowDetail } from '@/assets/components/Common/ShowDetail';
import { PlayButton } from '@/assets/components/Detail/PlayButton';
import { Poster } from '@/assets/components/Detail/Poster';
import { TvShowDetail } from '@/assets/interface/interface';
import theme from '@/app/style/theme';

async function getMovieDetails(movieId: string) {
  const getMovieDetail = await fetchDetails(movieId);
  return { getMovieDetail };
}

interface DetailPageProps {
  params: { slug: string[] };
}

const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
  console.log('detail page');
  const { getMovieDetail }: { getMovieDetail: TvShowDetail } = use(
    getMovieDetails(params.slug[0])
  );
  console.log('getMovieDetail', getMovieDetail);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header>
          <Poster obj={getMovieDetail} />
          <PlayButton obj={getMovieDetail} />
          <ShowDetail obj={getMovieDetail} />
        </Header>
      </ThemeProvider>
    </>
  );
};

const Header = styled.div`
  ${(props) => props.theme.detailCss}
`;

export default DetailPage;
