'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchVideos, fetchDetails } from '@/assets/api/requests';
import { ShowDetail } from '@/assets/components/Common/ShowDetail';
import { Frame } from '@/assets/components/Video/Frame';
import {
  VideoDetailPageProps,
  MovieVideo,
  MovieVideoInfo,
} from '@/assets/interface/interface';

async function getMovieVideo(movieId: string) {
  const getVideo = await fetchVideos(movieId);
  return { getVideo };
}

async function getMovieDetails(movieId: string) {
  const getMovieDetail = await fetchDetails(movieId);
  return { getMovieDetail };
}

const DetailPage: React.FC<VideoDetailPageProps> = ({ params }) => {
  const [movieDetail, setMovieDetail] = useState<MovieVideo | null>(null);
  const [movieInfo, setMovieInfo] = useState<MovieVideoInfo | null>(null);
  const [movieKey, setMovieKey] = useState<string>('');

  useEffect(() => {
    async function fetchInfo() {
      const getMovieDetail = await getMovieVideo(params.slug[0]);
      setMovieDetail(getMovieDetail);
      setMovieKey(getMovieDetail.getVideo.results[0].key);
    }
    fetchInfo();
    async function fetchData() {
      const getMovieInfo = await getMovieDetails(params.slug[0]);
      setMovieInfo(getMovieInfo.getMovieDetail);
    }
    fetchData();
  }, []);
  console.log('movieDetail', movieDetail);
  console.log('movieInfo', movieInfo);

  if (!movieInfo) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header>
        <Frame movieKey={movieKey} />
        <ShowDetail obj={movieInfo} />
      </Header>
    </Container>
  );
};

const Header = styled.div`
  width: 375px;
  height: 415px;
  padding-top: 10px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0) 87.26%,
    #000000 100%
  );
`;

const Container = styled.div``;

export default DetailPage;
