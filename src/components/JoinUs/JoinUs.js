import Container from '../GlobalComponents/Container';
import JoinUsCard from './JoinUsCard';
import './JoinUs.scss';

const JoinUs = () => (
  <section className='joinUs' id='blog'>
    <Container>
      <JoinUsCard title='FOR GIRL' />
      <JoinUsCard title='FOR BOYS' />
    </Container>
  </section>
);

export default JoinUs;
