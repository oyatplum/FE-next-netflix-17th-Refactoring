'use client';
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { fetchVideos, fetchDetails } from '@/assets/api/requests';
import { ShowDetail } from '@/assets/components/Common/ShowDetail';
import { Frame } from '@/assets/components/Video/Frame';
import {
  VideoDetailPageProps,
  MovieVideo,
  MovieVideoInfo,
} from '@/assets/interface/interface';
import theme from '@/app/style/theme';

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
      <ThemeProvider theme={theme}>
        <Header>
          <Frame movieKey={movieKey} />
          <ShowDetail obj={movieInfo} />
        </Header>
      </ThemeProvider>
    </Container>
  );
};

const Header = styled.div`
  ${(props) => props.theme.detailCss};
  padding-top: 10px;
`;

const Container = styled.div``;

export default DetailPage;
