import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import ContextSection from './components/ContextSection';
import InnovationsSection from './components/InnovationsSection';
import VideoSection from './components/VideoSection';
import ComparisonSection from './components/ComparisonSection';
import VisionSection from './components/VisionSection';
import StudentCtaSection from './components/StudentCtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TimelineSection />
        <ContextSection />
        <InnovationsSection />
        <VideoSection />
        <ComparisonSection />
        <VisionSection />
        <StudentCtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
