import './Navbar.scss';

const Menu = ({ openMenu }) => (
  <div className={openMenu ? 'menu' : 'hidden'}>
    <a href='#home'>home</a>
    <a href='#about'>about</a>
    <a href='#pricing'>pricing</a>
    <a href='#gallery'>gallery</a>
    <a href='#pages'>pages</a>
    <a href='#blog'>blog</a>
    <a href='#contact'>contact</a>
  </div>
);

export default Menu;
