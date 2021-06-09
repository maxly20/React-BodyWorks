import ImgOverlay from '../GlobalComponents/ImgOverlay';
import JoinUsInfo from './JoinUsInfo';
import './JoinUs.scss';

const JoinUsCard = ({ title }) => (
  <div className='card'>
    <ImgOverlay />
    <JoinUsInfo title={title} />
  </div>
);

export default JoinUsCard;
