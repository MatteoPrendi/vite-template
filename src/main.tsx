import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/app.tsx";
import "@/main.css";

const appContainer = document.getElementById("app") as HTMLElement;
if (!appContainer) {
  throw new Error("No app container!");
}

const reactRoot = createRoot(appContainer);
reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);

