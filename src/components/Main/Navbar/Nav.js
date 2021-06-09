import { useState } from 'react';
import Container from '../../GlobalComponents/Container';
import Logo from './Logo';
import Menu from './Menu';
import Button from '../../GlobalComponents/Button';
import './Navbar.scss';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <nav className='navBar'>
      <Container>
        <Logo />
        <Menu openMenu={openMenu} />
        <Button text='join us' />
        <i
          onClick={() => setOpenMenu(!openMenu)}
          id='burgerMenu'
          className={
            openMenu ? 'fas fa-times fa-lg' : 'fas fa-align-right fa-lg'
          }
        ></i>
      </Container>
    </nav>
  );
};

export default Nav;
