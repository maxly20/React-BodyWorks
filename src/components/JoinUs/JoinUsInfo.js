import Button from '../GlobalComponents/Button';
import './JoinUs.scss';

const JoinUsInfo = ({ title }) => (
  <div className='cardInfo'>
    <h2>{title}</h2>
    <p>
      There are many variations of passages of lorem Ipsum available, but the
      majority have suffered alteration.
    </p>
    <Button text='JOIN NOW' />
  </div>
);

export default JoinUsInfo;
