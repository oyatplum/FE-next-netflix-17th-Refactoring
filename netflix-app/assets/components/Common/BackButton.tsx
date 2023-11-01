'use client';
import { useRouter } from 'next/navigation';
import styled, { ThemeProvider } from 'styled-components';
import theme from '@/app/style/theme';

export const BackButton = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push('/home');
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <BackButtonWrapper onClick={handleOnClick}>x</BackButtonWrapper>
      </ThemeProvider>
    </>
  );
};
const BackButtonWrapper = styled.button`
  position: absolute;
  border: none;
  top: 5%;
  left: 90%;
  background: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.3rem;
  cursor: pointer;
`;
