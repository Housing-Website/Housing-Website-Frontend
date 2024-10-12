import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from "./pages/MainPage";
import BusinessInfo from "./pages/BusinessInfo";
import Location from "./pages/Location";
import Community from "./pages/Community";
import Counsel from "./pages/Counsel";
import ApartmentInfo from "./pages/ApartmentInfo";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="/사업정보" element={<BusinessInfo />} />
        <Route path="/상담신청" element={<Counsel />} />
        <Route path="/입지환경" element={<Location />} />
        <Route path="/커뮤니티" element={<Community />} />
        <Route path="/단지정보" element={<ApartmentInfo />} />
        <Route path="/로그인페이지" element={<LoginPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
