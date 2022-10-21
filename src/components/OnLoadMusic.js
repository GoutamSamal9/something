import React, { useRef } from "react";
import "./OnLoadMusic.css";
const OnLoadMusic = () => {
  const audioRef = useRef(null);

  const handelClick = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <>
      <button
        className="musicControlButton"
        onClick={handelClick}
        title="click here"
      >
        give me a kiss 👄
      </button>
      <audio
        src="https://pwdown.com/8990/03 Tu Hi Tu - KICK (Mohd. Irfan).mp3"
        ref={audioRef}
      />
    </>
  );
};
export default OnLoadMusic;
