import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import listButton from '../images/Button/list.svg';
import playButton from '../images/Button/play.svg';
import infoButton from '../images/Button/info.svg';
import Link from 'next/link';
import theme from '@/app/style/theme';
import { MovieTypeArray } from '@/assets/interface/interface';

export const Button = ({ obj }: MovieTypeArray) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <MyListButton>
            <ButtonImage src={listButton.src} />
            <div className="text">{'My List'}</div>
          </MyListButton>
          <PlayButton>
            <Link key={obj.id} href={`/video/${obj.id}`} className="link">
              <ButtonImage src={playButton.src} />
              <div className="text">{'Play'}</div>
            </Link>
          </PlayButton>
          <InfoButton>
            <Link key={obj.id} href={`/detail/${obj.id}`} className="link">
              <ButtonImage src={infoButton.src} />
              <div className="text">{'Info'}</div>
            </Link>
          </InfoButton>
        </Container>
      </ThemeProvider>
    </>
  );
};

const ButtonImage = styled.img``;
const Container = styled.div`
  ${(props) => props.theme.justifyCenter}
  height: 85px;
  margin-top: 15px;
  :hover {
    transform: scale(0.95);
    transition: transform 0.35s;
  }
`;
const MyListButton = styled.div`
  ${(props) => props.theme.flexColumn}
  align-items: center;
  cursor: pointer;
  .text {
    width: 60px;
    height: 20px;
    font-size: 13.6416px;
    line-height: 20px;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
  }
`;
const PlayButton = styled.div`
  width: 110.62px;
  height: 45px;
  background: #c4c4c4;
  border-radius: 5.625px;
  ${(props) => props.theme.alignCenter}
  padding-left: 19px;
  margin: 0 45px 0 40px;
  cursor: pointer;
  .link {
    text-decoration: none;
    display: flex;
  }
  .text {
    width: 39px;
    height: 30px;
    padding-left: 15px;
    font-weight: 600;
    font-size: 20.4624px;
    line-height: 30px;
    color: ${({ theme }) => theme.color.black};
  }
`;
const InfoButton = styled.div`
  cursor: pointer;
  .text {
    width: 22px;
    height: 20px;
    font-size: 13.6416px;
    line-height: 20px;
    color: ${({ theme }) => theme.color.white};
  }
  .link {
    text-decoration: none;
  }
`;
