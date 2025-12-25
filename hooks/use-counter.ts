import { useEffect, useState, useRef } from "react";

interface UseCounterOptions {
  end: number;
  duration?: number;
  start?: number;
}

export function useCounter({ end, duration = 2000, start = 0 }: UseCounterOptions): {
  count: number;
  startAnimation: () => void;
  isAnimating: boolean;
} {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef<number | null>(null);

  const startAnimation = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);

    const startTime = Date.now();
    const difference = end - start;

    const animate = (): void => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(start + difference * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  };


  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { count, startAnimation, isAnimating };
}
