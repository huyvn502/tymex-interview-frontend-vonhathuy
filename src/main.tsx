import LoadingPage from "@/components/LoadingPage";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ColorContextProvider } from "./config";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColorContextProvider>
      <React.Suspense fallback={<LoadingPage />}>
        <App />
      </React.Suspense>
    </ColorContextProvider>
  </StrictMode>,
);
