'use client';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Image from 'next/image';
import { TvShowDetail, TvShowTypeArray } from '@/assets/interface/interface';
import theme, { alignCenter } from '@/app/style/theme';

export default function TvShowCard({ arr }: TvShowTypeArray) {
  console.log('Tvshowcard');
  return (
    <>
      <ThemeProvider theme={theme}>
        <Movies>
          {arr && arr.length > 0 ? (
            arr.map((movie: TvShowDetail) => (
              <WrapMovie key={movie.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  width={146}
                  height={76}
                  alt={movie.name}
                />
                <MovieTitle>{movie.name}</MovieTitle>
              </WrapMovie>
            ))
          ) : (
            <p>No TV shows available</p>
          )}
        </Movies>
      </ThemeProvider>
    </>
  );
}

const WrapMovie = styled.div`
  margin-bottom: 10px;
  width: 375px;
  height: 76px;
  flex-direction: row;
  background: ${({ theme }) => theme.color.gray};
  ${alignCenter};
`;
const MovieTitle = styled.p`
  color: ${({ theme }) => theme.color.white};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 180px;
  margin-left: 10px;
`;
const Movies = styled.div`
  flex-direction: column;
  ${alignCenter};
  padding-bottom: 60px;
`;
