import { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';

export default function AnimatedBox({ children, delay = 0.1, ...rest }) {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay }
    );
  }, [delay]);

  return <Box ref={ref} {...rest}>{children}</Box>;
}
