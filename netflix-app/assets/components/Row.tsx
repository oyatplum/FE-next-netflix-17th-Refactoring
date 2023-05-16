import React from 'react';
import styled from 'styled-components';

export const Row = ({ title, id, isRoundRow, movies }: any) => {
  return (
    <Movies>
      <Title>{title}</Title>
      <Slider>
        <ArrowWrapper>
          <ArrowLeft
            onClick={() => {
              document.getElementById(id)!.scrollLeft -=
                window.innerWidth - 1300;
            }}
          >
            {'<'}
          </ArrowLeft>
        </ArrowWrapper>
        <Movie id={id}>
          {movies[0].map((movie: any) =>
            !isRoundRow ? (
              <RectangularMovie
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.name}
              />
            ) : (
              <WrapRoundMovie key={movie.id}>
                <RoundMovie
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.name}
                />
              </WrapRoundMovie>
            )
          )}
        </Movie>
        <ArrowWrapper>
          <ArrowRight
            onClick={() => {
              document.getElementById(id)!.scrollLeft +=
                window.innerWidth - 1300;
            }}
          >
            {'>'}
          </ArrowRight>
        </ArrowWrapper>
      </Slider>
    </Movies>
  );
};
const Slider = styled.div`
  display: flex;
`;
const ArrowWrapper = styled.div`
  padding-bottom: 25px;
  display: flex;
  align-items: center;
`;
const ArrowLeft = styled.p`
  font-size: 30px;
  color: white;
  cursor: pointer;
`;
const ArrowRight = styled.p`
  font-size: 30px;
  color: white;
  cursor: pointer;
`;
const Movie = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 5px 0 25px 0;
  scroll-behavior: smooth;
`;
const Title = styled.div`
  width: 150px;
  height: 45px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 26.7482px;
  line-height: 20px;
  letter-spacing: -0.0733945px;

  color: #ffffff;
`;
const Movies = styled.div`
  padding-left: 18px;
`;
const RectangularMovie = styled.img`
  margin-right: 7px;
  width: 103px;
  height: 161px;
  border-radius: 4px;
  cursor: pointer;
`;
const RoundMovie = styled.img`
  margin-right: 7px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
const WrapRoundMovie = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 0 4px 5px;
`;
