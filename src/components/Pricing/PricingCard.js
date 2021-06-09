import PricingTitle from './PricingTitle';
import PricingInfo from './PricingInfo';
import './Pricing.scss';

const PricingCard = ({ level }) => (
  <div className='pricingCard'>
    <PricingTitle level={level} />
    <PricingInfo />
  </div>
);

export default PricingCard;
