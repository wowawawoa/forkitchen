import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import KitchensPage from "./pages/KitchensPage/KitchensPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";

const App = () => {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/kitchens" element={<KitchensPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Route>
      </Routes>
  );
}

export default App;
