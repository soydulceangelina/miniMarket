import { useEffect } from 'react';

// 1 null false
// 2 {} true
// 3 {} true

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

// Object.keys({ a: 1, b: 2 }) === [a, b]
// { a: 1, b: 2 }['a'] === 2
