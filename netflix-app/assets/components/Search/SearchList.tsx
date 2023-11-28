import styled, { ThemeProvider } from 'styled-components';
import Image from 'next/image';
import { BiPlayCircle } from 'react-icons/bi';
import Link from 'next/link';
import { HeaderMovies, MovieDetail } from '@/assets/interface/interface';
import theme, { alignCenter } from '@/app/style/theme';

export default function SearchList({ movies }: HeaderMovies) {
  console.log('SearchList');
  return (
    <Container>
      <ThemeProvider theme={theme}>
        {movies.length === 0 ? (
          <ResultNoneText>There is no results. . .</ResultNoneText>
        ) : (
          <></>
        )}
        {movies.map((movie: MovieDetail, index: number) => (
          <MovieItem key={index}>
            <WrapImage>
              {movie.backdrop_path === null ? (
                <Image
                  src="/netflix-logo.png"
                  width={146}
                  height={76}
                  alt={movie.title}
                />
              ) : (
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  width={146}
                  height={76}
                  alt={movie.title}
                />
              )}
            </WrapImage>

            <WrapTitle href={`/detail/${movie.id}`}>
              <MovieTitle>{movie.title}</MovieTitle>
            </WrapTitle>
            <WrapPlayButton href={`/video/${movie.id}`}>
              <BiPlayCircle size={25} />
            </WrapPlayButton>
          </MovieItem>
        ))}
      </ThemeProvider>
    </Container>
  );
}

const WrapTitle = styled(Link)`
  cursor: pointer;
  text-decoration-line: none;
`;
const MovieItem = styled.div`
  margin-bottom: 10px;
  width: 375px;
  height: 76px;
  flex-direction: row;
  ${alignCenter};
  background: ${({ theme }) => theme.color.gray};
`;
const WrapImage = styled.div`
  margin-right: 10px;
  height: 76px;
`;
const MovieTitle = styled.p`
  color: ${({ theme }) => theme.color.white};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 180px;
`;
const ResultNoneText = styled.p`
  color: ${({ theme }) => theme.color.white};
`;
const WrapPlayButton = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
`;
const Container = styled.div``;
