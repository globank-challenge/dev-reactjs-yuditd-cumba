import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
export default function Navigation() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
