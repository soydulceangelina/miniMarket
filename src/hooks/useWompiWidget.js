import { useEffect } from 'react';

export const useWompiWidget = (config, form) => {
  const formChanged = form !== null;

  useEffect(() => {
    const script = document.createElement('script');
    Object.keys(config).forEach((key) => {
      script.setAttribute(key, config[key]);
    });
    form?.current?.appendChild(script);
  }, [formChanged]);
};
