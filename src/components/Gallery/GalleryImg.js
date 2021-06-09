import Overlay from '../GlobalComponents/Overlay';
import './Gallery.scss';

const GalleryImg = ({ galleryBg }) => (
  <div className='galleryImg'>
    <Overlay />
    <img src={galleryBg} alt='trainer' />
  </div>
);

export default GalleryImg;
