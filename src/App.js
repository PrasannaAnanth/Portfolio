import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/About';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Footer from './component/Footer';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
