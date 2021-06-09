import './Pricing.scss';

const PricingTitle = ({ level }) => (
  <div className='pricingTitle'>
    <h3>{level}</h3>
    <h5>$45/m</h5>
  </div>
);

export default PricingTitle;
