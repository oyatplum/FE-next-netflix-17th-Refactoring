'use client';
import styled from 'styled-components';
import NetflixComponent from '@/assets/components/Landing/NetflixComponent';

export default function app() {
  return (
    <Wrapper>
      <WrapLanding>
        <NetflixComponent />
      </WrapLanding>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  height: 100%;
`;

const WrapLanding = styled.div`
  width: 375px;
  height: 372px;
`;
