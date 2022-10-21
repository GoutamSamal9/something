import { gsap, Linear, Sine } from "gsap";

const greenSock = () => {
  gsap.set("#container", { perspective: 600 });
  gsap.set("img", { xPercent: "-50%", yPercent: "-50%" });

  let total = 30;
  let warp = document.getElementById("container"),
    w = window.innerWidth,
    h = window.innerHeight;

  for (let i = 0; i < total; i++) {
    let Div = document.createElement("div");
    gsap.set(Div, {
      attr: { class: "dot" },
      x: R(0, w),
      y: R(-200, -150),
      z: R(-200, 200),
    });
    warp.appendChild(Div);
    animm(Div);
  }

  function animm(elm) {
    gsap.to(elm, R(6, 15), {
      y: h + 100,
      ease: Linear.easeNone,
      repeat: -1,
      delay: -15,
    });
    gsap.to(elm, R(4, 8), {
      x: "+=100",
      rotationZ: R(0, 180),
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
    });
    gsap.to(elm, R(2, 8), {
      rotationX: R(0, 360),
      rotationY: R(0, 360),
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
      delay: -5,
    });
  }

  function R(min, max) {
    return min + Math.random() * (max - min);
  }
};
export default greenSock;
