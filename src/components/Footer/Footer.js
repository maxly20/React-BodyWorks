import FooterCardContainer from './FooterCardContainer';
import Container from '../GlobalComponents/Container';

import './Footer.scss';

const Footer = () => (
  <footer className='footer' id='contact'>
    <FooterCardContainer />
    <Container>
      <p>
        Copyright &copy;2021 All rights reserved | This Website is made with{' '}
        <i className='far fa-heart'></i> by{' '}
        <a href='#/' target='_blank' rel='noopener noreferrer'>
          Max Ly
        </a>
      </p>
    </Container>
  </footer>
);

export default Footer;
