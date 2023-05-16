import React from 'react';
import styled from 'styled-components';
import listButton from './images/Button/list.svg';
import playButton from './images/Button/play.svg';
import path from 'path';

export const Button = () => {
  return (
    <Container>
      <MyListButton>
        <ButtonImage src={listButton} />
        <div className="text">{'My List'}</div>
      </MyListButton>
      <PlayButton>
        <ButtonImage src={playButton} />
        <div className="text">{'Play'}</div>
      </PlayButton>
      <InfoButton>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16V12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8H12.01"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="text">{'Info'}</div>
      </InfoButton>
    </Container>
  );
};

const ButtonImage = styled.img``;
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 85px;
  margin-top: 15px;
`;
const MyListButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  .text {
    width: 60px;
    height: 20px;
    user-select: none;
    cursor: pointer;

    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 13.6416px;
    line-height: 20px;

    text-align: center;
    letter-spacing: -0.0408px;
    color: #ffffff;
  }
`;
const PlayButton = styled.div`
  width: 110.62px;
  height: 45px;
  background: #c4c4c4;
  border-radius: 5.625px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  margin: 0 45px 0 40px;
  cursor: pointer;

  .text {
    width: 39px;
    height: 30px;
    padding-left: 15px;
    user-select: none;
    cursor: pointer;

    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 20.4624px;
    line-height: 30px;

    color: #000000;
  }
`;
const InfoButton = styled.div`
  cursor: pointer;
  .text {
    width: 22px;
    height: 20px;
    user-select: none;
    cursor: pointer;

    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 13.6416px;
    line-height: 20px;
    /* identical to box height, or 147% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.0408px;

    color: #ffffff;
  }
`;
