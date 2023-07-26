import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Testimonial from './pages/testimonial';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Error from './pages/error';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Testimonial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
