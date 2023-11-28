import styled, { ThemeProvider } from 'styled-components';
import { TvShowTypeArray } from '@/assets/interface/interface';
import theme from '@/app/style/theme';

export const ShowDetail = (obj: TvShowTypeArray) => {
  console.log('Showdetail');
  return (
    <>
      <ThemeProvider theme={theme}>
        {obj && obj.obj ? (
          obj.obj.title !== undefined ? (
            <>
              <Title>{obj.obj.title}</Title>
              <Preview>{obj.obj.overview}</Preview>
            </>
          ) : (
            <AlertText>존재하지 않는 ID입니다.</AlertText>
          )
        ) : (
          <p>No Detail</p>
        )}
      </ThemeProvider>
    </>
  );
};
const Title = styled.div`
  left: 32px;
  top: 505px;
  height: 50px;
  font-weight: 700;
  font-size: 26.7482px;
  line-height: 30px;
  color: ${({ theme }) => theme.color.white};
  margin: 32px 0 0 32px;
`;

const Preview = styled.div`
  width: 311px;
  height: 43px;
  font-size: 13px;
  line-height: 14px;
  font-weight: 400;
  letter-spacing: -0.0305636px;
  color: rgba(255, 255, 255, 0.83);
  margin: 24px 32px 0 32px;
`;
const AlertText = styled.p`
  height: 50px;
  font-weight: 700;
  font-size: 23px;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
`;
