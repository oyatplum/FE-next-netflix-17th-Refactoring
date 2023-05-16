'use client';
import styled from 'styled-components';
import Footer from '@/assets/components/Common/Footer';
import SearchForm from './../../assets/components/SearchForm';

export default function searchPage() {
  return (
    <Search>
      <SearchForm />
      <Footer />
    </Search>
  );
}

const Search = styled.div``;
