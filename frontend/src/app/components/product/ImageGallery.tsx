import Image from 'next/image';

export default function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-[500px]">
          <Image
            src={src}
            alt={`Product image ${index + 1}`}
            layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }} 
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}