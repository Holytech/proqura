import Footer from "../Layout/Footer";
import Benefit from "../components/Home/Benefit";
import Demo from "../components/Home/Demo";
import Experience from "../components/Home/Experience";
import Hero from "../components/Home/Hero";
import Procurement from "../components/Home/Procurement";
import Purchasing from "../components/Home/Purchasing";

const Home = () => {
  return (
    <>
      <Hero />
      <Purchasing />
      <Procurement />
      <Benefit />
      <Experience />
      <Demo />
      <Footer />
    </>
  );
};

export default Home;
