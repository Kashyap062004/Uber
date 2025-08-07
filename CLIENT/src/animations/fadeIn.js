import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export const useFadeIn = (delay = 0.1) => {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay, ease: 'power3.out' }
    );
  }, []);

  return ref;
};
