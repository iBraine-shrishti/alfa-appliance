import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* Category-specific routes (laundry, refrigerator, etc.) can be added here */}
      </Route>
    </Routes>
  );
}

export default App;