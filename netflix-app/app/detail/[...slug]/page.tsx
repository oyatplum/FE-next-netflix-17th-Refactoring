'use client';
import React, { use } from 'react';
import styled from 'styled-components';
import { fetchDetails } from '@/assets/api/requests';
import { ShowDetail } from '@/assets/components/Common/ShowDetail';
import { PlayButton } from '@/assets/components/Detail/PlayButton';
import { Poster } from '@/assets/components/Detail/Poster';
import { TvShowDetail } from '@/assets/interface/interface';

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
      <Header>
        <Poster obj={getMovieDetail} />
        <PlayButton obj={getMovieDetail} />
        <ShowDetail obj={getMovieDetail} />
      </Header>
    </>
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

export default DetailPage;
