import { useEffect, useRef } from "react";
import "./App.css";
import OnLoadMusic from "./components/OnLoadMusic";
import greenSock from "./helper/geenSock";
import meGelu from "./image/meGelu.jpg";

function App() {
  const containerRef = useRef(null);
  const innerWidth = window.innerWidth;

  useEffect(() => {
    if (containerRef.current) {
      greenSock();
    }
  }, [containerRef]);

  return (
    <>
      {innerWidth < 100 ? (
        <div className="openText">
          <h1>
            My dear pechi😘... <br></br>
            I'm addicted to you, to your smile, too your lips, to your touch, to
            your love....
            <br></br>I will never leave you no matter what...
            <br></br>
            <br></br>
            Hei my dear pampdi chat please open it in your laptop...😁
          </h1>
        </div>
      ) : (
        <>
          <div id="container" ref={containerRef}></div>
          <div className="box">
            <div className="box-items">
              <div className="left-items">
                <img src={meGelu} alt="" />
              </div>
              <div className="right-items">
                <p>
                  My dear Gelu❤️, <br></br>
                  Everything...<br></br> Thanks for...<br></br> And
                  tenderness...
                  <br></br> You were always there, listening, understanding with
                  your own heart.. <br></br>Healthy or sick..<br></br> No matter
                  when I'm happy or sad.. <br></br>Thank you for being by my
                  side ... <br></br>
                  Pechi I Love you... I Love you so much...
                </p>
                <OnLoadMusic />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
