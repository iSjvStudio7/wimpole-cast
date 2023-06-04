import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

gsap.defaults({
  duration: 1
});

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
