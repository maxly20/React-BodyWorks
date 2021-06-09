import Title from '../GlobalComponents/Title';
import Container from '../GlobalComponents/Container';
import PricingCard from './PricingCard';
import './Pricing.scss';

const Pricing = () => (
  <section className='pricing' id='pricing'>
    <Title
      title='OUR PRICING'
      desc='There are many variations of passages of lorem Ipsum available, but the majority
        have suffered alteration.'
    />
    <Container>
      <PricingCard level='BEGINNER' />
      <PricingCard level='EXPERT' />
      <PricingCard level='PRO' />
    </Container>
  </section>
);

export default Pricing;
