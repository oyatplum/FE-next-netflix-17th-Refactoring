import styled from 'styled-components';
import { BiHomeAlt2 } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { HiDownload } from 'react-icons/hi';
import { BsList } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Footer = () => {
  const router = useRouter();

  const [selected, setSelected] = useState(false);

  return (
    <FooterWrapper>
      <FooterItem
        onClick={() => {
          router.push('/home');
          setSelected(true); //이거 onClick 아니면 false로 바꿔줘야 하맨
        }}
        selected
      >
        <BiHomeAlt2 />
        <FooterItemText>Home</FooterItemText>
      </FooterItem>
      <FooterItem
        onClick={() => {
          router.push('/search');
          setSelected(true);
        }}
        selected
      >
        <FiSearch />
        <FooterItemText>Search</FooterItemText>
      </FooterItem>
      <FooterItem selected={false}>
        <MdOutlineVideoLibrary />
        <FooterItemText>Coming Soon</FooterItemText>
      </FooterItem>
      <FooterItem selected={false}>
        <HiDownload />
        <FooterItemText>Downloads</FooterItemText>
      </FooterItem>
      <FooterItem selected={false}>
        <BsList />
        <FooterItemText>More</FooterItemText>
      </FooterItem>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 375px;
  height: 48px;
  background-color: #121212;
  margin: 0 auto;
`;

const FooterItem = styled.div<{ selected: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.selected ? '#E0E0E0' : '#757575')};
  font-size: 25px;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    color: ${(props) => (props.selected ? '#E0E0E0' : '#BDBDBD')};
  }
`;

const FooterItemText = styled.p`
  font-size: 10px;
  margin-top: 0;
`;
