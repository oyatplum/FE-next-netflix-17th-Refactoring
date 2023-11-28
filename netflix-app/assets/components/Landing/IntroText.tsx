import theme from '@/app/style/theme';
import styled, { ThemeProvider } from 'styled-components';

export const IntroText = () => {
  console.log('IntroText');
  return (
    <ThemeProvider theme={theme}>
      <IntroTextWrapper>
        화면을 클릭해주세요
        <IntroTextSmall>(소리를 키시는 것을 권장드립니다)</IntroTextSmall>
      </IntroTextWrapper>
    </ThemeProvider>
  );
};

const IntroTextWrapper = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 30px;
`;
const IntroTextSmall = styled.p`
  text-align: center;
  font-size: 15px;
`;
