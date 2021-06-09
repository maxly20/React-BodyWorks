import Container from '../GlobalComponents/Container';
import GalleryImg from './GalleryImg';
import GalleryOneBg from '../../image/galleryOne.jpeg';
import GalleryTwoBg from '../../image/galleryTwo.jpeg';
import GalleryThreeBg from '../../image/galleryThree.jpeg';
import GalleryFourBg from '../../image/galleryFour.jpeg';
import GalleryFiveBg from '../../image/galleryFive.jpeg';
import GallerySixBg from '../../image/gallerySix.jpeg';
import './Gallery.scss';

const Gallery = () => (
  <section className='gallery' id='gallery'>
    <Container>
      <GalleryImg galleryBg={GalleryOneBg} />
      <GalleryImg galleryBg={GalleryTwoBg} />
      <GalleryImg galleryBg={GalleryThreeBg} />
      <GalleryImg galleryBg={GalleryFourBg} />
      <GalleryImg galleryBg={GalleryFiveBg} />
      <GalleryImg galleryBg={GallerySixBg} />
    </Container>
  </section>
);

export default Gallery;
