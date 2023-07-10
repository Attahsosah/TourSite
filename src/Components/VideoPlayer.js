import React, { useState } from 'react';

const VideoPlayer = ({ src }) => {
  const [showModal, setShowModal] = useState(false);
  const videoRef = React.createRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      <video
        src={src}
        ref={videoRef}
        className="w-full h-auto"
        onClick={() => setShowModal(true)}
      ></video>
      <div className="absolute inset-0 flex items-center justify-center">
        {videoRef.current?.paused ? (
          <button className="text-white bg-gray-500 rounded-full p-3 shadow-lg" onClick={handlePlay}>
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
            
          </button>
        ) : (
          <button className="text-white bg-gray-500 rounded-full p-3 shadow-lg" onClick={handlePause}>
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8 5v14l11-7z" />
            </svg>
            
          </button>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <video
              src={src}
              ref={videoRef}
              className="w-full h-auto"
              autoPlay
              controls
            ></video>
            <button className="absolute top-0 right-0 m-4 text-white" onClick={handleModalClose}>
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41l5.59 5.59 1.41-1.41L13.41 12z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
