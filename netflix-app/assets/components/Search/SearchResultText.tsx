import { styled, ThemeProvider } from 'styled-components';
import { IsSearch } from '@/assets/interface/interface';
import theme from '@/app/style/theme';

export default function SearchResultText({ isSearch }: IsSearch) {
  console.log('SearchResultText');
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <ResultWrapper>
          {isSearch ? 'Search Results' : 'Top Searches'}
        </ResultWrapper>
      </ThemeProvider>
    </Container>
  );
}

const ResultWrapper = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 30px;
  font-weight: bold;
`;
const Container = styled.div``;
