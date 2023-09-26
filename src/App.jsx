import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <section className='flex flex-row font-urbanist'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Projects />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default App;
