import css from 'styled-jsx/css';
const color = {
  black: '#000000',
  white: '#ffffff',
};

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

const alignCenter = css`
  display: flex;
  align-items: center;
`;

const justifyCenter = css`
  display: flex;
  justify-content: center;
`;

const headerTitle = css`
  width: 300px;
  height: 45px;
  font-weight: 700;
  font-size: 26.7482px;
  line-height: 20px;
  letter-spacing: -0.0733945px;
  color: #ffffff;
  margin: 60px 0 20px 0;
`;

const detailCss = css`
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
  flexCenter,
  flexColumn,
  alignCenter,
  justifyCenter,
  headerTitle,
  detailCss,
};

export default theme;
