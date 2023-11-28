import { css } from 'styled-components';
const color = {
  black: '#000000',
  white: '#ffffff',
  gray: '#424242',
  lightGray: '#c4c4c4',
};

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const alignCenter = css`
  display: flex;
  align-items: center;
`;

export const justifyCenter = css`
  display: flex;
  justify-content: center;
`;

export const headerTitle = css`
  width: 300px;
  height: 45px;
  font-weight: 700;
  font-size: 26.7482px;
  line-height: 20px;
  letter-spacing: -0.0733945px;
  color: #ffffff;
  margin: 60px 0 20px 0;
`;

export const detailCss = css`
  width: 375px;
  height: 415px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0) 87.26%,
    #000000 100%
  );
`;

const theme = {
  color,
};

export default theme;
