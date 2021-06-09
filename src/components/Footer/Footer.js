import FooterCardContainer from './FooterCardContainer';
import Container from '../GlobalComponents/Container';

import './Footer.scss';

const Footer = () => (
  <footer className='footer' id='contact'>
    <FooterCardContainer />
    <Container>
      <p>
        Copyright &copy;2021 BodyWorks. All rights reserved.
      </p>
    </Container>
  </footer>
);

export default Footer;
