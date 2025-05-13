import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./release/Header";
import Footer from "./release/Footer";
import Section01 from "./release/Section01";
import Section02 from "./release/Section02";
import Section03 from "./release/Section03";
import Section04 from "./release/Section04";
import Section05 from "./release/Section05";
import Section06 from "./release/Section06";
import MobileBottomMenu from "./Components/MobileBottomMenu";

function App() {
  useEffect(() => {
    setTimeout(function () {
      AOS.init({});
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <div className="App">
      <Header />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section06 />
      <Section04 />
      <Section05 />
      <Footer />
      <MobileBottomMenu />
    </div>
  );
}

export default App;
