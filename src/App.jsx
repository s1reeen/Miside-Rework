import "./App.css";
import "modern-normalize/modern-normalize.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Features />
    </div>
  );
};
export default App;
