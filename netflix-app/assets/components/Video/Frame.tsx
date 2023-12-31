import styled from 'styled-components';
import { BackButton } from '@/assets/components/Common/BackButton';
import { FrameType } from '@/assets/interface/interface';

export const Frame = ({ movieKey }: FrameType) => {
  console.log('Frame');
  return (
    <FrameWrapper>
      <Iframe
        width="640"
        height="640"
        src={`https://www.youtube.com/embed/${movieKey}?controls=0&autoplay=1&loop=1&playlist=${movieKey}`}
        title="YouTube video player"
        allow="autoplay; fullscreen"
      ></Iframe>
      <BackButton />
    </FrameWrapper>
  );
};

const FrameWrapper = styled.div`
  position: relative;
  display: flex;
  height: 300px;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;
