'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { TvShowDetail, TvShowTypeArray } from '@/assets/interface/interface';

export default function TvShowCard({ arr }: TvShowTypeArray) {
  return (
    <>
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
    </>
  );
}

const WrapMovie = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 375px;
  height: 76px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #424242;
`;
const MovieTitle = styled.p`
  color: white;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 180px;
  margin-left: 10px;
`;
const Movies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
`;
