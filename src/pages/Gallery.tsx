import { useState } from 'react';
import { Page } from '../components/Page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight, faExpand } from '@fortawesome/free-solid-svg-icons';
import './Gallery.css';

interface GalleryImage {
  src: string;
  alt: string;
  category: 'events' | 'team';
}

const galleryImages: GalleryImage[] = [
  { src: '/pictures/events/467577316_10225404568963071_8838477138819151216_n.jpg', alt: 'Elegant Wedding Ceremony', category: 'events' },
  { src: '/pictures/events/498663607_10226921931616189_8170909277146438864_n.jpg', alt: 'Beautiful Event Setup', category: 'events' },
  { src: '/pictures/events/499183800_10226921932096201_1084515797136356291_n.jpg', alt: 'Wedding Reception', category: 'events' },
  { src: '/pictures/events/499264869_10226931941266424_6763980335718565726_n.jpg', alt: 'Corporate Event', category: 'events' },
  { src: '/pictures/events/499735716_10226928489380129_5769391724585253881_n.jpg', alt: 'Special Occasion', category: 'events' },
  { src: '/pictures/events/500126772_10226931941866439_9124778952242018806_n.jpg', alt: 'Event Coordination', category: 'events' },
  { src: '/pictures/events/506600976_10227218531991013_1129535181612997474_n.jpg', alt: 'Wedding Planning', category: 'events' },
  { src: '/pictures/events/506978237_10227218533271045_7214823021407221054_n.jpg', alt: 'Event Design', category: 'events' },
  { src: '/pictures/events/507263979_10227218531390998_436779254755519760_n.jpg', alt: 'Celebration Setup', category: 'events' },
  { src: '/pictures/events/509263379_10227292601482704_1222993724930299732_n.jpg', alt: 'Perfect Event', category: 'events' },
  { src: '/pictures/team/465681024_10225152306696672_1599594828417365943_n.jpg', alt: 'Team at Work', category: 'team' },
  { src: '/pictures/team/465985368_10225152306536668_1956440148654156181_n.jpg', alt: 'Event Planning Team', category: 'team' },
  { src: '/pictures/team/467466325_10225448014249176_2103855458043853108_n.jpg', alt: 'Professional Team', category: 'team' },
  { src: '/pictures/team/472406791_18088130683540205_7364056143874506214_n.jpg', alt: 'Team Collaboration', category: 'team' },
];

export const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'events' | 'team'>('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <Page 
      title="Gallery" 
      subtitle="A showcase of our beautiful work from previous events and celebrations"
      pageName="gallery"
    >
      <div className="gallery-content">
        <div className="gallery-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <span>All Photos</span>
          </button>
          <button 
            className={`filter-btn ${filter === 'events' ? 'active' : ''}`}
            onClick={() => setFilter('events')}
          >
            <span>Events</span>
          </button>
          <button 
            className={`filter-btn ${filter === 'team' ? 'active' : ''}`}
            onClick={() => setFilter('team')}
          >
            <span>Team</span>
          </button>
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div 
              key={`${image.src}-${index}`}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <FontAwesomeIcon icon={faExpand} className="expand-icon" />
                <p className="image-title">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div 
            className="lightbox"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            onClick={closeLightbox}
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              
              <button className="lightbox-prev" onClick={prevImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              
              <button className="lightbox-next" onClick={nextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>

              <img 
                src={filteredImages[currentImageIndex]?.src} 
                alt={filteredImages[currentImageIndex]?.alt}
                className="lightbox-image"
              />
              
              <div className="lightbox-caption">
                <h4>{filteredImages[currentImageIndex]?.alt}</h4>
                <p>{currentImageIndex + 1} of {filteredImages.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
};