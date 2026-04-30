import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import SuccessStories from './pages/SuccessStories/SuccessStories';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ProgramsPage from './pages/ProgramsPage/ProgramsPage';
import Community from './pages/Community/Community';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <SuccessStories />
            <Programs onNavigate={handleNavigate} />
            <Testimonial />
          </>
        );
      case 'programs':
        return <ProgramsPage />;
      case 'success':
      case 'results':
        return <SuccessStories />;
      case 'community':
        return <Community />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <SuccessStories />
            <Programs onNavigate={handleNavigate} />
            <Testimonial />
          </>
        );
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
