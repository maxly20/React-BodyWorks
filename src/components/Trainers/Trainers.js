import Container from '../GlobalComponents/Container';
import Title from '../GlobalComponents/Title';
import ImgOverlay from '../GlobalComponents/ImgOverlay';
import TrainerCard from './TrainerCard';
import TeamOneBg from '../../image/teamOne.png';
import TeamTwoBg from '../../image/teamTwo.png';
import TeamThreeBg from '../../image/teamThree.png';
import './Trainer.scss';

const Trainers = () => (
  <section className='trainers' id='pages'>
    <ImgOverlay />
    <Title
      title='OUR TRAINERS'
      desc='There are many variations of passages of lorem Ipsum available, but the majority
        have suffered alteration.'
    />
    <Container>
      <TrainerCard
        trainerName='Alyssa Milano'
        trainerGender='Woman Trainer'
        trainerImg={TeamOneBg}
      />
      <TrainerCard
        trainerName='Christiano Ronaldo'
        trainerGender='Men Trainer'
        trainerImg={TeamTwoBg}
      />
      <TrainerCard
        trainerName='Sam Mendes'
        trainerGender='Men Trainer'
        trainerImg={TeamThreeBg}
      />
    </Container>
  </section>
);

export default Trainers;
