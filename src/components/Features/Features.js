import Container from '../GlobalComponents/Container';
import Title from '../GlobalComponents/Title';
import FeaturesCard from './FeaturesCard';
import IconOne from '../../image/iconOne.svg';
import IconTwo from '../../image/iconTwo.svg';
import IconThree from '../../image/iconThree.svg';
import IconFour from '../../image/iconFour.svg';
import './Features.scss';

const Features = () => (
  <section className='features' id='about'>
    <Title
      title='OUR FEATURES'
      desc='There are many variations of passages of lorem Ipsum available, but the majority
        have suffered alteration.'
    />
    <Container>
      <FeaturesCard cardImg={IconOne} cardTitle='Weightlifting' />
      <FeaturesCard cardImg={IconTwo} cardTitle='Specific Muscles' />
      <FeaturesCard cardImg={IconThree} cardTitle='Flex Your Muscles' />
      <FeaturesCard cardImg={IconFour} cardTitle='Cardio Exercises' />
    </Container>
  </section>
);

export default Features;
