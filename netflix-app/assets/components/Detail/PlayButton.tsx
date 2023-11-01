import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
import playButton from '@/assets/components/images/Button/play.svg';
import { TvShowTypeArray } from '@/assets/interface/interface';
import theme from '@/app/style/theme';

export const PlayButton = ({ obj }: TvShowTypeArray) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {obj ? (
          obj.id !== undefined ? (
            <Button>
              <PlayButtonWrapper>
                <Link key={obj.id} href={`/video/${obj.id}`} className="link">
                  <ButtonImage src={playButton.src} />
                  <div className="text">{'Play'}</div>
                </Link>
              </PlayButtonWrapper>
            </Button>
          ) : (
            <></>
          )
        ) : (
          <p>No Button</p>
        )}
      </ThemeProvider>
    </>
  );
};

const Button = styled.div`
  :hover {
    transform: scale(0.95);
    transition: transform 0.35s;
  }
`;

const PlayButtonWrapper = styled.div`
  height: 45px;
  background: #c4c4c4;
  border-radius: 5.625px;
  ${(props) => props.theme.flexCenter};
  padding-left: 19px;
  margin: 13px 36px 0 36px;
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
const ButtonImage = styled.img``;
