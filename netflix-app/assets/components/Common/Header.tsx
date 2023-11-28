import styled, { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import theme, { alignCenter } from '@/app/style/theme';

export const Header = () => {
  console.log('Header');
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    // window.addEventListener('scroll', () => {
    //   if (window.scrollY > 200) {
    //     setShow(true);
    //   } else {
    //     setShow(false);
    //   }
    // });

    // return () => {
    //   window.removeEventListener('scroll', () => {});
    // };

    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderWrapper>
          <div className={`nav ${show && 'nav_black'}`}>
            <Link href={'/'} className="Logo">
              <LogoWrapper src={`/netflix_trans.png`}></LogoWrapper>
            </Link>
            <Link href={'/header_tvShow'} className="Logo">
              <HeaderMenu>TV Shows</HeaderMenu>
            </Link>
            <Link href={'/header_movie'} className="Logo">
              <HeaderMenu>Movies</HeaderMenu>
            </Link>
            <Link href={'/home'} className="Logo">
              <HeaderMenu>My List</HeaderMenu>
            </Link>
          </div>
        </HeaderWrapper>
      </ThemeProvider>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  .nav {
    width: 375px;
    padding: 1rem 0 1rem 0;
    ${alignCenter};
    justify-content: space-around;
    position: fixed;
    transition: all 0.5s ease-in;
  }
  .nav_black {
    background-color: ${({ theme }) => theme.color.black};
  }
  .Logo {
    text-decoration: none;
    :hover {
      transform: scale(0.92);
      transition: transform 0.35s;
    }
  }
`;

const HeaderMenu = styled.p`
  font-size: 17.2px;
  color: ${({ theme }) => theme.color.white};
`;

const LogoWrapper = styled.img`
  width: 1.5rem;
`;
