import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { SmoothScroll } from './components/layout/SmoothScroll';
import { Cursor } from './components/layout/Cursor';
import { SectionScroll } from './components/layout/SectionScroll';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <Router>
      <SmoothScroll><SectionScroll />
        <div className="relative bg-[#050505] text-[#94a3b8] min-h-screen flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
          <Cursor />
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/:slug" element={<ProjectPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;

