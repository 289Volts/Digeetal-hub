import { useState } from 'react';
import Image from 'next/image';

const BlurSkeleton = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative">
      <div className="w-full pb-full bg-gray-200 relative overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-1/2 bg-white animate-pulse"></div>
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`absolute inset-0 object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default BlurSkeleton;