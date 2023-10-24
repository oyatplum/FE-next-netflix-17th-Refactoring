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

const theme = {
  color,
  flexCenter,
  flexColumn,
  alignCenter,
  justifyCenter,
};

export default theme;
