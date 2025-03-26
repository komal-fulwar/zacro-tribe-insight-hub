
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

const WalletSpline = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    console.log("Error loading Spline scene");
    setHasError(true);
  };

  return (
    <div className="relative h-64 w-full">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-zacro-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4 rounded-lg">
            <div className="text-zacro-500 text-4xl mb-2">💼</div>
            <p className="text-sm text-gray-400">Wallet visualization</p>
          </div>
        </div>
      ) : (
        <Spline
          scene="https://prod.spline.design/6a0kkXxsJNClJ6lL/scene.splinecode"
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
        />
      )}
    </div>
  );
};

export default WalletSpline;
