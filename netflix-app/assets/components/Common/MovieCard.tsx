'use client';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderMovies, MovieDetail } from '@/assets/interface/interface';
import theme from '@/app/style/theme';

export default function MovieCard({ movies }: HeaderMovies) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Movies>
          {movies.map((movie: MovieDetail) => (
            <WrapMovie key={movie.id}>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                width={146}
                height={76}
                alt={movie.title}
              />
              <WrapTitle href={`/detail/${movie.id}`}>
                <MovieTitle>{movie.title}</MovieTitle>
              </WrapTitle>
            </WrapMovie>
          ))}
        </Movies>
      </ThemeProvider>
    </>
  );
}
const WrapTitle = styled(Link)`
  cursor: pointer;
  text-decoration-line: none;
  margin-left: 10px;
`;
const WrapMovie = styled.div`
  margin-bottom: 10px;
  width: 375px;
  height: 76px;
  flex-direction: row;
  ${(props) => props.theme.alignCenter};
  background: #424242;
`;
const MovieTitle = styled.p`
  color: white;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 180px;
`;
const Movies = styled.div`
  flex-direction: column;
  ${(props) => props.theme.alignCenter};
  padding-bottom: 60px;
`;
