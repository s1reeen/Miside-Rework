import "./App.css";
import "modern-normalize/modern-normalize.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Story from "./components/Story/Story";
import Reviews from "./components/Reviews/Reviews";
import Download from "./components/Download/Download";
import Questions from "./components/Quenstions/Questions";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Features />
      <Story />
      <Reviews />
      <Download />
      <Questions />
      <Footer />
    </div>
  );
};
export default App;
