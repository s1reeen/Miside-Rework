import "./App.css";
import "modern-normalize/modern-normalize.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Story from "./components/Story/Story";
import Reviews from "./components/Reviews/Reviews";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Features />
      <Story />
      <Reviews />
    </div>
  );
};
export default App;
