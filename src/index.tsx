import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = lazy(() => import("./App"));
const Fetch = lazy(() => import("./Fetch"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<h1>LOADING...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/fetch" element={<Fetch />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
