import React, { Suspense, lazy, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
const Accueil = lazy(() => import('./pages/Accueil'));
const APropos = lazy(() => import('./pages/APropos'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Isolation = lazy(() => import('./pages/Isolation'));
const CEE = lazy(() => import('./pages/CEE'));
const Projets = lazy(() => import('./pages/Projets'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

// Articles de blog
const Article1 = lazy(() => import('./pages/articles/Article1'));
const Article2 = lazy(() => import('./pages/articles/Article2'));
const Article3 = lazy(() => import('./pages/articles/Article3'));
const Article4 = lazy(() => import('./pages/articles/Article4'));
const Article5 = lazy(() => import('./pages/articles/Article5'));
const Article6 = lazy(() => import('./pages/articles/Article6'));
const Article7 = lazy(() => import('./pages/articles/Article7'));
const Article8 = lazy(() => import('./pages/articles/Article8'));
const Article9 = lazy(() => import('./pages/articles/Article9'));
const Article10 = lazy(() => import('./pages/articles/Article10'));

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LoadingScreen = () => (
  <div className="flex h-[40vh] items-center justify-center bg-bg">
    <p className="font-mono text-sm text-text-light">Chargement...</p>
  </div>
);

const NotFound = () => (
  <section className="mx-auto flex min-h-[50vh] w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
    <h1 className="font-heading text-5xl text-primary-dark">404</h1>
    <p className="mt-4 text-text-light">La page demandée est introuvable.</p>
  </section>
);

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {/* Background Noise Filter applied globally */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-noise opacity-50"></div>

      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 w-full">
          <Suspense fallback={<LoadingScreen />}>
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
