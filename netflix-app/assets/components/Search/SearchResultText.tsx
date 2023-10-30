import { styled } from 'styled-components';
import { IsSearch } from '@/assets/interface/interface';

export default function SearchResultText({ isSearch }: IsSearch) {
  return (
    <Container>
      <ResultWrapper>
        {isSearch ? 'Search Results' : 'Top Searches'}
      </ResultWrapper>
    </Container>
  );
}

const ResultWrapper = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
const Container = styled.div``;
