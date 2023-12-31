'use client';
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme, { detailCss } from './style/theme';

export default function NotFound() {
  console.log('not-found page');
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      window.location.replace('/');
    }, seconds * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Container>
        <ThemeProvider theme={theme}>
          <Header>
            <Poster>
              <BackImg imageurl="/not_found.jpg" />
            </Poster>
            <Title>
              잘못된 페이지입니다 <br />
              {seconds}초후에 메인페이지로 이동합니다.
            </Title>
          </Header>
        </ThemeProvider>
      </Container>
    </>
  );
}

const Poster = styled.div`
  position: relative;
  display: flex;
`;
const Title = styled.div`
  height: 50px;
  font-weight: 700;
  font-size: 23px;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
`;
const Header = styled.div`
  ${detailCss};
`;
const BackImg = styled.div<{ imageurl: string }>`
  width: 375px;
  height: 415px;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0) 87.26%,
      #000000 100%
    ),
    url(${(props) => props.imageurl});
  background-size: cover;
  background-position: auto;
`;
const Container = styled.div``;
