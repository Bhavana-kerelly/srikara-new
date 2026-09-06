'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc?: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend = false,
  children,
}: ScrollExpandMediaProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Track scroll position through the dedicated 220vh expansion track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Map the first 85% of scroll to full 0 -> 1 video expansion
    const progress = Math.min(Math.max(latest / 0.85, 0), 1);
    setScrollProgress(progress);
  });

  useEffect(() => {
    // Sync initial scroll progress if page is refreshed or restored
    const current = scrollYProgress.get();
    if (typeof current === 'number') {
      setScrollProgress(Math.min(Math.max(current / 0.85, 0), 1));
    }
  }, [scrollYProgress]);

  // Calculate proportional widescreen dimensions
  // Initial dimensions (centered card in middle of hero)
  const initialWidth = isMobileState ? 330 : 640;
  const initialHeight = isMobileState ? 200 : 360;

  // Maximum expanded dimensions (bounded safely so it never shoots upside or off-screen)
  const targetWidth = isMobileState
    ? (typeof window !== 'undefined' ? window.innerWidth * 0.94 : 360)
    : (typeof window !== 'undefined' ? Math.min(window.innerWidth * 0.92, 1200) : 1100);
  const targetHeight = isMobileState
    ? (typeof window !== 'undefined' ? Math.min(window.innerHeight * 0.65, 480) : 420)
    : (typeof window !== 'undefined' ? Math.min(window.innerHeight * 0.74, 620) : 580);

  const mediaWidth = initialWidth + scrollProgress * (targetWidth - initialWidth);
  const mediaHeight = initialHeight + scrollProgress * (targetHeight - initialHeight);
  const textTranslateX = scrollProgress * (isMobileState ? 140 : 120);
  const textOpacity = Math.max(1 - scrollProgress * 1.6, 0);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div className='relative w-full select-text'>
      {/* 
        STICKY SCROLL TRACK:
        Dedicated 220vh scroll track containing ONLY the sticky hero viewport.
      */}
      <div
        ref={containerRef}
        className='relative w-full'
        style={{ height: '220vh' }}
      >
        {/* 
          STICKY HERO VIEWPORT:
          Pins the entire hero viewport to the screen throughout the 220vh scroll track.
          As the user scrolls down, the hero section stays right there in place,
          and the video expands interactively with the scroll while remaining
          locked in the EXACT VERTICAL AND HORIZONTAL MIDDLE!
        */}
        <div className='sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#031525] via-[#062A4A] to-[#041628] text-white z-10'>
        {/* Optional Background Image (Only rendered if bgImageSrc is provided) */}
        {bgImageSrc && (
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt='Background'
              width={1920}
              height={1080}
              className='w-screen h-screen'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            />
            <div className='absolute inset-0 bg-black/40' />
          </motion.div>
        )}

        {/* Ambient Backlight Lighting (Active when no photo is used) */}
        {!bgImageSrc && (
          <div className='absolute inset-0 z-0 pointer-events-none overflow-hidden'>
            <div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#19BFD3]/20 via-[#D41472]/15 to-transparent rounded-full blur-3xl' />
            <div className='absolute -top-24 -left-24 w-80 h-80 bg-[#19BFD3]/10 rounded-full blur-3xl' />
            <div className='absolute top-1/2 -right-24 w-80 h-80 bg-[#D41472]/15 rounded-full blur-3xl' />
          </div>
        )}

        {/* Hero Content Stage (Padded to clear the 76px sticky navbar) */}
        <div className='relative z-10 w-full h-full flex flex-col items-center justify-center pt-16 sm:pt-20 px-4'>
          {/* 
            Expanding Video Card:
            Stays locked in the EXACT MIDDLE of the hero section.
            Expands in direct synchronization with user scroll distance!
          */}
          <div
            className='relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/20'
            style={{
              width: `${mediaWidth}px`,
              height: `${mediaHeight}px`,
              maxWidth: '94vw',
              maxHeight: 'min(76vh, 640px)',
              boxShadow: '0px 25px 70px rgba(0, 0, 0, 0.85)',
              transition: 'box-shadow 0.2s ease',
            }}
          >
            {mediaType === 'video' ? (
              mediaSrc.includes('youtube.com') ? (
                <div className='relative w-full h-full pointer-events-none'>
                  <iframe
                    width='100%'
                    height='100%'
                    src={
                      mediaSrc.includes('embed')
                        ? mediaSrc +
                          (mediaSrc.includes('?') ? '&' : '?') +
                          'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                        : mediaSrc.replace('watch?v=', 'embed/') +
                          '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                          mediaSrc.split('v=')[1]
                    }
                    className='w-full h-full rounded-2xl sm:rounded-3xl'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />
                  <div className='absolute inset-0 z-10' style={{ pointerEvents: 'none' }} />
                  <motion.div
                    className='absolute inset-0 bg-black/20'
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 0.3 - scrollProgress * 0.2 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              ) : (
                <div className='relative w-full h-full pointer-events-none'>
                  <video
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='auto'
                    className='w-full h-full object-cover rounded-2xl sm:rounded-3xl'
                    controls={false}
                    disablePictureInPicture
                    disableRemotePlayback
                  />
                  <div className='absolute inset-0 z-10' style={{ pointerEvents: 'none' }} />
                  <motion.div
                    className='absolute inset-0 bg-black/20'
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 0.3 - scrollProgress * 0.2 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              )
            ) : (
              <div className='relative w-full h-full'>
                <Image
                  src={mediaSrc}
                  alt={title || 'Media content'}
                  width={1280}
                  height={720}
                  className='w-full h-full object-cover rounded-2xl sm:rounded-3xl'
                />
                <motion.div
                  className='absolute inset-0 bg-black/30'
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 0.3 - scrollProgress * 0.2 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            )}

            {/* Date / Milestone Badge & Scroll Expansion Cue */}
            <div 
              className='absolute bottom-3 sm:bottom-4 left-4 right-4 z-20 flex flex-col items-center text-center pointer-events-none transition-opacity duration-300'
              style={{ opacity: textOpacity }}
            >
              {date && (
                <p
                  className='text-xs sm:text-sm font-black tracking-[0.25em] text-[#19BFD3] uppercase drop-shadow-md mb-1'
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {date}
                </p>
              )}
              {scrollToExpand && (
                <p
                  className='text-[11px] sm:text-xs text-white/90 font-medium tracking-wide drop-shadow-md bg-black/50 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15'
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {scrollToExpand}
                </p>
              )}
            </div>
          </div>

          {/* 
            Title Headings that Split Animate to Left & Right as Video Expands:
            Layered cleanly over the middle and fades gracefully as video grows
          */}
          <div
            className={`absolute inset-0 flex items-center justify-center text-center gap-2 sm:gap-4 w-full z-20 pointer-events-none flex-col pt-16 sm:pt-20 px-4 ${
              textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
            }`}
            style={{ opacity: textOpacity }}
          >
            <motion.h2
              className='font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl tracking-tight'
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                transform: `translateX(-${textTranslateX}vw)`,
              }}
            >
              {firstWord}
            </motion.h2>
            <motion.h2
              className='font-serif text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#D41472] via-pink-400 to-[#19BFD3] drop-shadow-2xl italic'
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                transform: `translateX(${textTranslateX}vw)`,
              }}
            >
              {restOfTitle}
            </motion.h2>
          </div>
        </div>
      </div>
      </div>

      {/* 
        Revealed Children Content (Directly follows AFTER the 220vh expansion track):
        Seamlessly enters the screen from underneath as the user continues scrolling!
      */}
      {children && (
        <div className='relative z-20 w-full bg-[#031525] text-white -mt-px'>
          <section className='flex flex-col w-full px-4 sm:px-8 py-10 md:px-16 lg:py-20'>
            {children}
          </section>
        </div>
      )}
    </div>
  );
};

export default ScrollExpandMedia;
