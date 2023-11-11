'use client';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
import { useEffect, useRef } from 'react';

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('load', () => {
        create({
          player: '#musicLottie',
          mode: 'scroll',
          actions: [
            {
              visibility: [0, 1],
              type: 'seek',
              frames: [0, 300],
            },
          ],
        });
      });
    }
  }, []);

  return (
    <div>
      <div className="h-[100rem]">first div</div>
      <lottie-player
        ref={ref}
        autoplay
        loop
        id="musicLottie"
        mode="normal"
        src="/musicLottie.json"
        style={{ width: '150px' }}
      ></lottie-player>
      <div className="h-[100rem]">second div</div>
    </div>
  );
}
