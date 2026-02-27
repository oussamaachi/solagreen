import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Solutions from './pages/Solutions';
import Isolation from './pages/Isolation';
import CEE from './pages/CEE';
import Projets from './pages/Projets';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Articles de blog
import Article1 from './pages/articles/Article1';
import Article2 from './pages/articles/Article2';
import Article3 from './pages/articles/Article3';
import Article4 from './pages/articles/Article4';
import Article5 from './pages/articles/Article5';
import Article6 from './pages/articles/Article6';
import Article7 from './pages/articles/Article7';
import Article8 from './pages/articles/Article8';
import Article9 from './pages/articles/Article9';
import Article10 from './pages/articles/Article10';

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {/* Background Noise Filter applied globally */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-noise opacity-50"></div>

      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/isolation" element={<Isolation />} />
            <Route path="/cee" element={<CEE />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* Articles de blog */}
            <Route path="/blog/article-1" element={<Article1 />} />
            <Route path="/blog/article-2" element={<Article2 />} />
            <Route path="/blog/article-3" element={<Article3 />} />
            <Route path="/blog/article-4" element={<Article4 />} />
            <Route path="/blog/article-5" element={<Article5 />} />
            <Route path="/blog/article-6" element={<Article6 />} />
            <Route path="/blog/article-7" element={<Article7 />} />
            <Route path="/blog/article-8" element={<Article8 />} />
            <Route path="/blog/article-9" element={<Article9 />} />
            <Route path="/blog/article-10" element={<Article10 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
