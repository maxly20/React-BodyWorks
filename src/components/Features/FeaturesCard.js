import './Features.scss';

const FeaturesCard = ({ cardImg, cardTitle }) => (
  <div className='featuresCard'>
    <img src={cardImg} alt='icon' />
    <h3>{cardTitle}</h3>
    <p>There are many variations of passages of lorem Ipsum available.</p>
  </div>
);

export default FeaturesCard;
