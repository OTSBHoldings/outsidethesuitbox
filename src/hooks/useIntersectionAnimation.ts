
import { useEffect, RefObject } from 'react';

interface UseIntersectionAnimationProps {
  refs: RefObject<HTMLElement>[];
  threshold?: number;
}

export const useIntersectionAnimation = ({ refs, threshold = 0.1 }: UseIntersectionAnimationProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold }
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs, threshold]);
};

