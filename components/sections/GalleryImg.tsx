const GalleryImg = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default GalleryImg;