import { AbsoluteFill, Audio, staticFile } from "remotion";
import gsap from "gsap";
import { useRef } from "react";
import { useGsapTimeline } from "../../utils/useGsapTimeline";

const Template01 = () => {
  const squareRef = useRef(null);
  const animationBoxRef = useGsapTimeline<HTMLDivElement>(() =>
    gsap
      .timeline()
      .fromTo(squareRef.current, { opacity: 0 }, { x: 810, opacity: 1 })
      .to(squareRef.current, {
        background: "yellow",
        rotate: 90,
        keyframes: [{ scale: 1.5 }, { scale: 1 }]
      })
      .to(squareRef.current, { opacity: 0, x: 1920 })
  );

  return (
    <AbsoluteFill
      ref={animationBoxRef}
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#efefef"
      }}
    >
      <div
        ref={squareRef}
        style={{ width: 300, height: 300, background: "#3E85C7" }}
      />
      <Audio src={staticFile("music.mp3")} volume={0.5} startFrom={100} />
    </AbsoluteFill>
  );
};

export default Template01;
