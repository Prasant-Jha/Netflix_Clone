import React, { useRef, useEffect } from 'react';

function VideoComponent() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      const rect = video.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        if (video.paused) {
          video.play();
        }
      } else {
        if (!video.paused) {
          video.pause();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} controls className='h-[50vh] w-[70%]'>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoComponent;
