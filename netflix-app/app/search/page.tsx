'use client';
import React, { useState, useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SearchList from '@/assets/components/Search/SearchList';
import { fetchSearch, fetchTopRated } from '@/assets/api/requests';
import { BiSearch, BiX } from 'react-icons/bi';
import SearchResultText from '@/assets/components/Search/SearchResultText';
import { useInView } from 'react-intersection-observer';
import { MovieDetail } from '@/assets/interface/interface';
import theme, { alignCenter } from '../style/theme';

async function getSearchData(e: string) {
  const searchData = await fetchSearch(e);
  return searchData;
}

async function getTopRatedData(page?: number) {
  const topRatedData = await fetchTopRated(page);
  return topRatedData;
}

export default function SearchPage() {
  console.log('search page');
  const [searched, setSearched] = useState<MovieDetail[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [page, setPage] = useState<number>(2);
  const [endRef, inView] = useInView();
  const inputRef = useRef(null as any);
  if (inputRef.current) {
    inputRef.current.focus();
  }
  useEffect(() => {
    async function fetchData() {
      const topRatedData = await getTopRatedData();
      //console.log('topRatedData', topRatedData);
      setSearched(topRatedData[0]);
    }
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  //console.log('searched', searched);

  useEffect(() => {
    if (inputText.length == 0) setIsSearching(false);
    else setIsSearching(true);
  }, [inputText]);

  useEffect(() => {
    async function fetchData() {
      const topRatedData = await getTopRatedData(page);
      if (topRatedData) {
        setSearched((prevSearched: MovieDetail[]) => [
          ...prevSearched,
          ...topRatedData[0],
        ]);
      }
    }
    if (inView && !isSearching) {
      setPage((page) => page + 1);
      fetchData();
    }
  }, [inView]);

  const handleChange = async (e: { target: { value: string } }) => {
    setInputText(e.target.value);

    if (e.target.value === '') {
      const initialResults = await getTopRatedData();
      setSearched(initialResults[0]);
    } else {
      const searchResults = await getSearchData(e.target.value);
      setSearched(searchResults);
    }
  };

  const handleDelete = async () => {
    setInputText('');
    const initialResults = await getTopRatedData();
    setSearched(initialResults[0]);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <Contatiner>
      <ThemeProvider theme={theme}>
        <SearchWrapper>
          <SearchInputWrapper>
            <ButtonWrapper>
              <BiSearch color="#FFFFFF" size={22} />
            </ButtonWrapper>
            <SearchBox
              ref={inputRef}
              value={inputText}
              onChange={handleChange}
              placeholder="Search for a movie"
            ></SearchBox>
            <ButtonWrapper>
              <BiX color="#FFFFFF" size={27} onClick={handleDelete} />
            </ButtonWrapper>
          </SearchInputWrapper>

          <SearchResultText isSearch={isSearching} />

          <SearchList movies={searched} />
          <div ref={endRef}></div>
        </SearchWrapper>
      </ThemeProvider>
    </Contatiner>
  );
}
const SearchWrapper = styled.div`
  padding-bottom: 45px;
`;
const SearchInputWrapper = styled.div`
  ${alignCenter};
  margin-top: 50px;
  height: 50px;
  background: ${({ theme }) => theme.color.gray};
`;
const SearchBox = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
  font-size: 15.213px;
  line-height: 31px;
  border: none;
  letter-spacing: 0.206667px;
  background: ${({ theme }) => theme.color.gray};
  outline: none;
`;
const ButtonWrapper = styled.div`
  cursor: pointer;
  margin: 5px 12px 0 12px;
`;
const Contatiner = styled.div``;
