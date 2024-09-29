import BasicLayout from "@/layouts/BasicLayout";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Marketplace from "./pages/Marketplace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <BasicLayout>
              <Outlet />
            </BasicLayout>
          }
        >
          <Route index element={<Marketplace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
