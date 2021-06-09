import TrainerCardOverlay from './TrainerCardOverlay';
import './Trainer.scss';

const TrainerCard = ({ trainerName, trainerGender, trainerImg }) => (
  <div className='trainerCard'>
    <div className='trainerImg'>
      <TrainerCardOverlay />
      <img src={trainerImg} alt='trainer' />
    </div>
    <h2>{trainerName}</h2>
    <p>{trainerGender}</p>
  </div>
);

export default TrainerCard;
