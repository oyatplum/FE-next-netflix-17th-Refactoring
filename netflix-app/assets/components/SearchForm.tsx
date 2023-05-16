import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchSearch } from '@/assets/api/requests';

async function getSearchData(e: string) {
  const getSearchData = await fetchSearch(e);

  return {
    getSearchData,
  };
}

export default async function SearchForm() {
  const [text, setText] = useState('' as any);
  const [searched, setSearched] = useState([] as any);

  useEffect(() => {
    const searchMovies = async (text: any) => {
      const s = await getSearchData(text);
      setSearched(s.getSearchData);
      if (text === '') {
        setSearched(undefined);
      }
    };

    searchMovies(text);
    console.log(searched);
  }, [text, setText, searched]);

  const handleClear = () => {
    setText('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <svg //svg는 따로 정리할 예정
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7656 14.6895L10.6934 9.61719C11.4805 8.59961 11.9062 7.35547 11.9062 6.04688C11.9062 4.48047 11.2949 3.01172 10.1895 1.9043C9.08398 0.796875 7.61133 0.1875 6.04688 0.1875C4.48242 0.1875 3.00977 0.798828 1.9043 1.9043C0.796875 3.00977 0.1875 4.48047 0.1875 6.04688C0.1875 7.61133 0.798828 9.08398 1.9043 10.1895C3.00977 11.2969 4.48047 11.9062 6.04688 11.9062C7.35547 11.9062 8.59766 11.4805 9.61523 10.6953L14.6875 15.7656C14.7024 15.7805 14.72 15.7923 14.7395 15.8004C14.7589 15.8084 14.7797 15.8126 14.8008 15.8126C14.8218 15.8126 14.8427 15.8084 14.8621 15.8004C14.8815 15.7923 14.8992 15.7805 14.9141 15.7656L15.7656 14.916C15.7805 14.9011 15.7923 14.8835 15.8004 14.864C15.8084 14.8446 15.8126 14.8238 15.8126 14.8027C15.8126 14.7817 15.8084 14.7609 15.8004 14.7414C15.7923 14.722 15.7805 14.7043 15.7656 14.6895V14.6895ZM9.14063 9.14063C8.3125 9.9668 7.21484 10.4219 6.04688 10.4219C4.87891 10.4219 3.78125 9.9668 2.95313 9.14063C2.12695 8.3125 1.67188 7.21484 1.67188 6.04688C1.67188 4.87891 2.12695 3.7793 2.95313 2.95313C3.78125 2.12695 4.87891 1.67188 6.04688 1.67188C7.21484 1.67188 8.31445 2.125 9.14063 2.95313C9.9668 3.78125 10.4219 4.87891 10.4219 6.04688C10.4219 7.21484 9.9668 8.31445 9.14063 9.14063Z"
          fill="#C4C4C4"
        />
      </svg>

      <SearchBox
        onChange={handleChange}
        placeholder="Search for a movie"
      ></SearchBox>

      <SearchedMovies>
        {searched === undefined ? (
          <S>
            {searched
              .filter((input: any) =>
                input.title.toLowerCase().includes(text.toLocaleLowerCase())
              )
              .map((movie: any) => (
                <Movies key={movie.id}>{movie.id}</Movies> //일단 movie.id 찍어봄
              ))}
          </S>
        ) : (
          <S>
            {searched
              .filter((input: any) =>
                input.title.toLowerCase().includes(text.toLocaleLowerCase())
              )
              .map((movie: any) => (
                <Movies key={movie.id}>{movie.id}</Movies> //일단 movie.id 찍어봄
              ))}
          </S>
        )}
      </SearchedMovies>

      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.6399 15L7.50482 8.85925L1.36977 15L0 13.6311L6.14469 7.5L0 1.36889L1.36977 0L7.50482 6.14075L13.6399 0.00964032L15 1.36889L8.86495 7.5L15 13.6311L13.6399 15Z"
          fill="#C4C4C4"
        />
      </svg>
    </Container>
  );
}

const S = styled.div``;
const Movies = styled.div``;
const SearchedMovies = styled.div``;

const Container = styled.div``;

const SearchBox = styled.input`
  width: 375px;
  height: 52px;
  left: 0px;
  top: 44px;
  margin-top: 44px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 15.213px;
  line-height: 31px;

  letter-spacing: 0.206667px;

  background: #424242;
`;
