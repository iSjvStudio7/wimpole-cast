import { Player } from "@remotion/player";
import Template01 from "./templates/Template01";
export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Player
        style={{ width: "100%", maxWidth: 700 }}
        controls
        component={Template01}
        durationInFrames={120}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
      />
    </div>
  );
}
