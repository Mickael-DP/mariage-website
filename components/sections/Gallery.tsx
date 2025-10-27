import GalleryImg from './GalleryImg';

interface GalleryProps {
  images: Array<{ src: string; alt: string }>;
}

const Gallery = ({ images }: GalleryProps) => {

  const column1 = images.slice(0, 2);
  const column2 = images.slice(2, 5);
  const column3 = images.slice(5, 7);

  return (
    <div className="grid grid-cols-3  gap-2 md:gap-6 md:p-4">
      <div className="flex flex-col gap-2 md:gap-4">
        {column1.map((image, index) => (
          <div key={index} className="w-full">
            <GalleryImg src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

        <div className="flex flex-col gap-2 md:gap-4">
        {column2.map((image, index) => (
          <div key={index} className="w-full">
            <GalleryImg src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
         <div className="flex flex-col gap-2 md:gap-4">
        {column3.map((image, index) => (
          <div key={index} className="w-full">
            <GalleryImg src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;