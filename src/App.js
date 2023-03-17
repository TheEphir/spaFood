import {
  BrowserRouter as Router,
  Routes, // only inside this element you can use Route
  Route,
} from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { About } from './pages/About';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Category } from './pages/Category';
import { MealResipe } from './components/MealRecipe';
function App() {
  return (
    <>
      <Router basename='/SPAshop'>
        <Header /> {/* ========== HEADER */}
        <main className='container content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/category/:name' element={<Category />} />
            <Route path='/category/:name/meal/:id' element={<MealResipe />} />
          </Routes>
        </main>
        <Footer /> {/* ========== FOOTER */}
      </Router>
    </>
  );
}

export default App;
