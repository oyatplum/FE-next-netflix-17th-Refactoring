'use client';
import styled, { ThemeProvider } from 'styled-components';
import NetflixComponent from '@/assets/components/Landing/NetflixComponent';
import { useState } from 'react';
import { IntroText } from '@/assets/components/Landing/IntroText';
import theme from './style/theme';
export default function app() {
  console.log('app');
  const [enter, setEnter] = useState(false);
  const handleEnterNetflix = () => {
    setEnter(true);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper>
          {enter ? (
            <WrapLanding>
              <NetflixComponent />
            </WrapLanding>
          ) : (
            <WrapEntire onClick={handleEnterNetflix}>
              <IntroText />
            </WrapEntire>
          )}
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black}
  ${(props) => props.theme.alignCenter}
  height: 100%;
`;

const WrapLanding = styled.div`
  width: 375px;
  height: 372px;
`;

const WrapEntire = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.black}
  ${(props) => props.theme.flexCenter}
  cursor: pointer;
`;
