import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ArtistPage from "./pages/ArtistPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};
export default App;
