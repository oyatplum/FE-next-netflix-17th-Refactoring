import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import animationData from './NetflixLogo.json';
import { useEffect } from 'react';

export const NetflixComponent = () => {
  const router = useRouter();
  useEffect(() => {
    const goPage = setTimeout(() => {
      router.push('/home');
    }, 3800);
  }, []);
  return (
    <Wrapper>
      <Lottie animationData={animationData} loop={false} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 372px;
`;

export default NetflixComponent;
