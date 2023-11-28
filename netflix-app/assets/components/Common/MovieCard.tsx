'use client';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderMovies, MovieDetail } from '@/assets/interface/interface';
import theme, { alignCenter } from '@/app/style/theme';

export default function MovieCard({ movies }: HeaderMovies) {
  console.log('MovieCard');
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
  ${alignCenter};
  background: ${({ theme }) => theme.color.gray};
`;
const MovieTitle = styled.p`
  color: ${({ theme }) => theme.color.white};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 180px;
`;
const Movies = styled.div`
  flex-direction: column;
  ${alignCenter};
  padding-bottom: 60px;
`;
