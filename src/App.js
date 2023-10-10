import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import {Home} from './Pages/Home'
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Category } from './Pages/Category';
import { NotFound } from './Pages/NotFound';
import { Recipe } from './Pages/Recipe';

function App() {
    return (
        <>
            <Router basename= '/react-food'>
                <Header />
                <main className='container content'>
                
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contact />} />
                        <Route path='/category/:name' element={<Category />} />
                        <Route path='/meal/:id' element={<Recipe />} />
                        <Route element={<NotFound />} />
                    </Routes>
                    
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
