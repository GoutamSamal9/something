import { useEffect, useRef } from "react";
import "./App.css";
import OnLoadMusic from "./components/OnLoadMusic";
import greenSock from "./helper/geenSock";
// import meGelu from "./image/meGelu.jpg";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef) {
      greenSock();
    }
  }, [containerRef]);

  return (
    <>
      <div id="container" ref={containerRef}></div>
      <div className="box">
        <div className="box-items">
          <div className="left-items">{/* <img src={meGelu} alt="" /> */}</div>
          <div className="right-items">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal{" "}
            </p>
            <OnLoadMusic />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
