import './App.css';
import About from './Componnents/About/About';
import Contact from './Componnents/Contact/Contact';
import Footer from './Componnents/Footer/Footer';
import Profile from './Componnents/Home/Profile';
import Resume from './Componnents/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Profile />
      <About />
      <Resume/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
