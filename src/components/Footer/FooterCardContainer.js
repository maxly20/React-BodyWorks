import Button from '../GlobalComponents/Button';
import './Footer.scss';

const FooterCardContainer = () => (
  <div className='footerWrap'>
    <div className='footerCard'>
      <h2>BodyWorks</h2>
      <p>999 Hope Street, Springvale VIC 3174, Australia</p>
      <a href='#/'>+61 499 999 999</a>
      <a href='#/'>info@bodyworks.com</a>
      <div className='footerSocials'>
        <i className='fab fa-facebook-f'></i>
        <i className='fab fa-twitter'></i>
        <i className='fab fa-instagram'></i>
        <i className='fab fa-pinterest'></i>
        <i className='fab fa-youtube'></i>
      </div>
    </div>
    <div className='footerCard'>
      <h2>Useful Links</h2>
      <a href='#/'>Pricing</a>
      <a href='#/'>About</a>
      <a href='#/'>Gallery</a>
      <a href='#/'>Contact</a>
    </div>
    <div className='footerCard'>
      <h2>Subscribe</h2>
      <div className='inputWrap'>
        <input type='email' placeholder='Enter your mail' />
        <Button text='Subscribe' />
      </div>
      <p>
        Esteem spirit temper too say adieus who direct esteem esteems luckily.
      </p>
    </div>
  </div>
);

export default FooterCardContainer;
