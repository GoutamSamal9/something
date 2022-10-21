import React, { useRef } from "react";
import "./OnLoadMusic.css";
const OnLoadMusic = () => {
  const audioRef = useRef(null);

  const handelClick = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      }
    }
  };

  return (
    <>
      <button className="musicControlButton" onClick={handelClick}>
        Click
      </button>
      <audio
        src="https://pwdown.com/8990/03 Tu Hi Tu - KICK (Mohd. Irfan).mp3"
        ref={audioRef}
      />
    </>
  );
};
export default OnLoadMusic;
